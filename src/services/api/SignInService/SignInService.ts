import { HttpMethod, type IHttpClient } from '@/infra/http/HttpClientContract';

export interface SignInBody {
  email: string;
}

export interface ISignInService {
  exec: (data: SignInBody) => Promise<SignInBody>;
}

export class SignInService implements ISignInService {
  // biome-ignore lint/style/noParameterProperties: not necessary here
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: SignInBody) {
    const responseSignInService = await this.httpClient.request<SignInBody>({
      method: HttpMethod.POST,
      endpoint: '/authenticate',
      body,
    });

    return responseSignInService;
  }
}
