import { HttpClient } from '@/infra/http/HttpClient';
import { RegisterRestaurantService as ServiceRegisterRestaurant } from '@/services/api/register-restaurant-service/register-restaurant-service';
import { useSignUpModel } from './SignUpModel';
import { SignUpView } from './SignUpView';

export const SignUpPage = () => {
  const httpClient = HttpClient.create();
  const RegisterRestaurantService = new ServiceRegisterRestaurant(httpClient);
  const methods = useSignUpModel({ RegisterRestaurantService });

  return <SignUpView {...methods} />;
};
