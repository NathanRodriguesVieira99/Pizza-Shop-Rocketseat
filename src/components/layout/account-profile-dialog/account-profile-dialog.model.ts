import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useQueries } from '@/hooks/useQueries';
import { HttpClient } from '@/infra/http/HttpClient';
import type { GetManagedRestaurantResponse } from '@/services/api/get-managed-restaurant';
import {
  UpdateProfile,
  type UpdateProfileBody,
} from '@/services/api/update-profile';
import {
  type StoreProfileSchema,
  storeProfileSchema,
} from './account-profile-dialog.schema';

const httpClient = HttpClient.create();
const updateProfileService = new UpdateProfile(httpClient);

export const useAccountProfileDialogModel = () => {
  const queryClient = useQueryClient();
  const { managedRestaurant } = useQueries();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  });

  const updateManagedRestaurantCache = ({
    name,
    description,
  }: StoreProfileSchema) => {
    const cached = queryClient.getQueryData<GetManagedRestaurantResponse>([
      'managed-restaurant',
    ]);

    if (cached) {
      queryClient.setQueryData<GetManagedRestaurantResponse>(
        ['managed-restaurant'],
        {
          ...cached,
          name,
          description,
        }
      );
    }

    return { cached };
  };

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: (data: UpdateProfileBody) => updateProfileService.exec(data),
    onMutate({ name, description }) {
      const { cached } = updateManagedRestaurantCache({ name, description });

      return { previousProfile: cached };
    },
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateManagedRestaurantCache(context.previousProfile);
      }
    },
  });

  const onUpdateProfile = async (data: StoreProfileSchema) => {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      });

      toast.success('Perfil atualizado com sucesso');
    } catch {
      toast.error('Falha ao atualizar o perfil, tente novamente!');
    }
  };

  const handleUpdateProfile = handleSubmit(onUpdateProfile);

  return { register, handleUpdateProfile, isSubmitting };
};
