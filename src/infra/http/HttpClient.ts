import type { AxiosError, AxiosInstance } from 'axios';
import axios from 'axios';
import { env } from '@/config/env/config';
import type { HttpRequest, IHttpClient } from './HttpClientContract';

const BASE_URL = env.VITE_API_BASE_URL;

export class HttpClient implements IHttpClient {
  // biome-ignore lint/style/noParameterProperties: not necessary here
  private constructor(private api: AxiosInstance = axios) {}

  async request<TResponse, TBody>(props: HttpRequest<TBody>) {
    const { endpoint, method, body, headers } = props;

    try {
      const { data } = await this.api.request<TResponse>({
        url: `${BASE_URL}${endpoint}`,
        method,
        headers,
        data: body,
      });

      return data;
    } catch (err) {
      const error = err as AxiosError;
      const status = error.response?.status || 500;
      const message = error.response?.data || error.message;
      throw new Error(`Request failed with status ${status}: ${message}`);
    }
  }
}
