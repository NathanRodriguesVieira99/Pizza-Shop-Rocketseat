import { HttpMethod, type IHttpClient } from '@/infra/http/HttpClientContract';

export interface SignInBody {
  email: string;
}

export interface ISignInService {
  exec: (data: SignInBody) => Promise<void>;
}

export class SignInService implements ISignInService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: SignInBody) {
    const responseSignInService = await this.httpClient.request<void>({
      method: HttpMethod.POST,
      endpoint: '/authenticate',
      body,
    });

    return responseSignInService;
  }
}
