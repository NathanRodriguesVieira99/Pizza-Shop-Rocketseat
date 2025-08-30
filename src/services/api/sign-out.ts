import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export interface ISignOutService {
  exec: () => Promise<void>;
}

export class SignOutService implements ISignOutService {
  constructor(private readonly httpClient: HttpClient) {}

  async exec(): Promise<void> {
    const signOutResponse = await this.httpClient.request<void, void>({
      method: HttpMethod.POST,
      endpoint: '/sign-out',
    });

    return signOutResponse;
  }
}
