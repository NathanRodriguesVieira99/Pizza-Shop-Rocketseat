import { HttpClient } from '@/infra/http/HttpClient';
import { RegisterRestaurantService as ServiceRegisterRestaurant } from '@/services/api/register-restaurant-service';
import { useSignUpModel } from './SignUpModel';
import { SignUpView } from './SignUpView';

export const SignUpPage = () => {
  /**
   *  cria uma instância do HttpClient
   */
  const httpClient = HttpClient.create();

  /**
   *  cria uma instância do serviço passando o HttpClient
   */
  const RegisterRestaurantService = new ServiceRegisterRestaurant(httpClient);

  /**
   * chama o Hook da Model passando a instância do(s) serviço(s) como parâmetro
   */
  const methods = useSignUpModel({ RegisterRestaurantService });

  /**
   * renderiza a View passando os métodos do useSignUpModel como props
   */
  return <SignUpView {...methods} />;
};
