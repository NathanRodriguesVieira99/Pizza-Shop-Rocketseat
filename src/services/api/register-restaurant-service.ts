import { HttpMethod, type IHttpClient } from '@/infra/http/HttpClientContract';

/**
 *  tipagem dos dados que serão enviados na requisição HTTP
 */
export interface RegisterRestaurantRequest {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

/**
 *  interface do serviço que garante que o método exec receba o dados e retorne uma Promise
 */
export interface IRegisterRestaurantService {
  exec: (data: RegisterRestaurantRequest) => Promise<void>;
}

/**
 *  classe do serviço que instancia o HttpClient via constructor
 */
export class RegisterRestaurantService implements IRegisterRestaurantService {
  constructor(private readonly httpClient: IHttpClient) {}

  /**
   * passar props quando necessário
   */
  async exec(body: RegisterRestaurantRequest) {
    const responseRegisterRestaurantService =
      await this.httpClient.request<void>({
        method: HttpMethod.POST,
        endpoint: '/restaurants',
        body,
      });

    return responseRegisterRestaurantService;
  }
}
