import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { SignFormSchema } from './SignIn.schema';

export const useSignInModel = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignFormSchema>();

  const onSubmit = async (data: SignFormSchema) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success('Enviamos um link de autenticação para o seu e-mail', {
        action: {
          label: 'Reenviar',
          onClick: () => onSubmit(data),
        },
      });
    } catch {
      toast.error('Credenciais inválidas');
    }
  };

  const handleSignIn = handleSubmit(onSubmit);

  return { register, handleSignIn, isSubmitting };
};
