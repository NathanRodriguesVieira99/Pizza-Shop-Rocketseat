import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export interface GetProfileResponse {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: 'manager' | 'customer';
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface IGetProfile {
  exec: (data?: undefined) => Promise<GetProfileResponse>;
}

export class GetProfile implements IGetProfile {
  constructor(private readonly httpClient: HttpClient) {}

  async exec() {
    const getProfileResponse = await this.httpClient.request<
      GetProfileResponse,
      undefined
    >({
      method: HttpMethod.GET,
      endpoint: '/me',
    });

    return getProfileResponse;
  }
}
