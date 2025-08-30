import type { AxiosError, AxiosInstance } from 'axios';
import axios from 'axios';
import { env } from '@/config/env/config';
import type { HttpRequest, IHttpClient } from './HttpClientContract';

const BASE_URL = env.VITE_API_BASE_URL;

// delay nas requisições da API para fins de teste
if (env.VITE_ENV === 'development' && env.VITE_ENABLE_API_DELAY) {
  axios.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return config;
  });
}

export class HttpClient implements IHttpClient {
  private constructor(private api: AxiosInstance = axios) {}

  // facilita a injeção em outros arquivos
  static create() {
    return new HttpClient();
  }

  // instância do axios
  get Instance() {
    return this.api;
  }

  async request<TResponse, TBody>(props: HttpRequest<TBody>) {
    const { endpoint, method, body, headers, params } = props;

    try {
      const { data } = await this.api.request<TResponse>({
        url: `${BASE_URL}${endpoint}`,
        method,
        headers,
        data: body,
        params,
        withCredentials: true,
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
