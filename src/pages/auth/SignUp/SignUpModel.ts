import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import type { SignUpFormSchema } from './SignUp.schema';

export const useSignUpModel = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormSchema>();

  const onSubmit = async (_data: SignUpFormSchema) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success('Restaurante cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/signIn'),
        },
      });
    } catch {
      toast.error('Erro ao cadastrar restaurante.');
    }
  };

  const handleSignUp = handleSubmit(onSubmit);

  return { register, isSubmitting, handleSignUp };
};
