import { useSignUpModel } from './SignUpModel';
import { SignUpView } from './SignUpView';

export const SignUpPage = () => {
  const methods = useSignUpModel();

  return <SignUpView {...methods} />;
};
