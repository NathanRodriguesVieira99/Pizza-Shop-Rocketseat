import type { IRegisterRestaurantService } from '@/services/api/register-restaurant-service';

/**
 * Esse type é usado para tipar o parâmetro do Model, garantindo que ele receba uma instância do serviço já tipada corretamente
 */
export type RegisterRestaurantProps = {
  RegisterRestaurantService: IRegisterRestaurantService;
};
