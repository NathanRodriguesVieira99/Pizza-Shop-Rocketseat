import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import type { RegisterRestaurantRequest } from '@/services/api/register-restaurant-service';
import type { SignUpFormSchema } from './SignUp.schema';
import type { RegisterRestaurantProps } from './SignUp.types';

export const useSignUpModel = ({
  /**
   * recebe o serviço como parâmetro via o tipo RegisterRestaurantProps
   */
  RegisterRestaurantService,
}: RegisterRestaurantProps) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormSchema>();

  /**
   *  cria uma Mutation do React-Query que chama o método exec do serviço para cadastrar um restaurante
   */
  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: (data: RegisterRestaurantRequest) =>
      RegisterRestaurantService.exec(data),
  });

  /**
   *  na submissão do formulário chama a Mutation passando os dados do formulário
   */
  const onSubmit = async (data: SignUpFormSchema) => {
    try {
      await registerRestaurantFn({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        email: data.email,
        phone: data.phone,
      });

      toast.success('Restaurante cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/signIn?email=${data.email}`),
        },
      });
    } catch {
      toast.error('Erro ao cadastrar restaurante.');
    }
  };

  const handleSignUp = handleSubmit(onSubmit);

  return { register, isSubmitting, handleSignUp };
};
