import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type {
  ISignInService,
  SignInBody,
} from '@/services/api/SignInService/SignInService';
import type { SignInFormSchema } from './SignIn.schema';

type SignInModelProps = {
  SignInService: ISignInService;
};

export const useSignInModel = ({ SignInService }: SignInModelProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormSchema>();

  /**
   *  useMutation -> POST , PUT , DELETE
   *  useQuery -> GET
   */
  const { mutateAsync: authenticate } = useMutation({
    mutationFn: (data: SignInBody) => SignInService.exec(data),
  });

  const onSubmit = async (data: SignInFormSchema) => {
    try {
      await authenticate({ email: data.email });

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
