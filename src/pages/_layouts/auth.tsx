import { SignIn } from '../auth/sign-in';

export const AuthLayout = () => {
  return (
    <div>
      <h1>Autenticação</h1>

      <div>
        <SignIn />
      </div>
    </div>
  );
};
