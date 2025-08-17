import { useSignInModel } from './SignInModel';
import { SignInView } from './SignInView';

export const SignInPage = () => {
  const methods = useSignInModel();

  return <SignInView {...methods} />;
};
