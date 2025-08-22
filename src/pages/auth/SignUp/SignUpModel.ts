import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import type { RegisterRestaurantBody } from '@/services/api/register-restaurant-service/register-restaurant-service';
import type { SignUpFormSchema } from './SignUp.schema';
import type { RegisterRestaurantProps } from './SignUp.types';

export const useSignUpModel = ({
  RegisterRestaurantService,
}: RegisterRestaurantProps) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormSchema>();

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: (data: RegisterRestaurantBody) =>
      RegisterRestaurantService.exec(data),
  });

  const onSubmit = async (data: SignUpFormSchema) => {
    try {
      await registerRestaurantFn({
        restaurantName: data.managerName,
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
