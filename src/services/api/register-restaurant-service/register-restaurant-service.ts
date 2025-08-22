import { HttpMethod, type IHttpClient } from '@/infra/http/HttpClientContract';

export interface RegisterRestaurantBody {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export interface IRegisterRestaurantService {
  exec: (data: RegisterRestaurantBody) => Promise<void>;
}

export class RegisterRestaurantService implements IRegisterRestaurantService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: RegisterRestaurantBody) {
    const responseRegisterRestaurantService =
      await this.httpClient.request<void>({
        method: HttpMethod.POST,
        endpoint: '/restaurants',
        body,
      });

    return responseRegisterRestaurantService;
  }
}
