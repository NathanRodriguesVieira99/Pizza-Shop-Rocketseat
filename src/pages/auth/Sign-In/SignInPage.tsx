import { HttpClient } from '@/infra/http/HttpClient';
import { SignInService as ServiceSignIn } from '@/services/api/sign-in';
import { useSignInModel } from './SignInModel';
import { SignInView } from './SignInView';

export const SignInPage = () => {
  const httpClient = HttpClient.create();
  const SignInService = new ServiceSignIn(httpClient);
  const methods = useSignInModel({ SignInService });

  return <SignInView {...methods} />;
};
