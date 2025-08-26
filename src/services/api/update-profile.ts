import type { HttpClient } from '@/infra/http/HttpClient';
import { HttpMethod } from '@/infra/http/HttpClientContract';

export interface UpdateProfileBody {
  name: string;
  description: string | null;
}
// ! ACHO QUE ESTÁ ERRADO POIS AS DUAS INTERFACES SÂO IGUAIS
export interface UpdateProfileResponse {
  name: string;
  description: string | null;
}

export interface IUpdateProfile {
  exec: (data: UpdateProfileBody) => Promise<UpdateProfileResponse>;
}

export class UpdateProfile implements IUpdateProfile {
  constructor(private readonly httpClient: HttpClient) {}

  async exec(body: UpdateProfileBody) {
    const updateProfileResponse = await this.httpClient.request<
      UpdateProfileBody,
      UpdateProfileResponse
    >({
      method: HttpMethod.PUT,
      endpoint: '/profile',
      body,
    });

    return updateProfileResponse;
  }
}
