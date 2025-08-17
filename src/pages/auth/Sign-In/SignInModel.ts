import { useForm } from 'react-hook-form';
import type { SignFormSchema } from './SignIn.schema';

export const useSignInModel = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignFormSchema>();

  const onSubmit = async (data: SignFormSchema) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const handleSignIn = handleSubmit(onSubmit);

  return { register, handleSignIn, isSubmitting };
};
