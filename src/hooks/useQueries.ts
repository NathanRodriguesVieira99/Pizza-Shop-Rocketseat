import { useQuery } from '@tanstack/react-query';
import { HttpClient } from '@/infra/http/HttpClient';
import { GetManagedRestaurant } from '@/services/api/get-managed-restaurant';
import { GetProfile } from '@/services/api/get-profile';

const httpClient = HttpClient.create();
const getProfileService = new GetProfile(httpClient);
const getManagedRestaurantService = new GetManagedRestaurant(httpClient);

export const useQueries = () => {
  /**
   *  useQuery -> GET
   */
  const { data: profile, isLoading: isloadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfileService.exec(),
    staleTime: Number.POSITIVE_INFINITY,
  });

  const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
    useQuery({
      queryKey: ['managed-restaurant'],
      queryFn: () => getManagedRestaurantService.exec(),
      staleTime: Number.POSITIVE_INFINITY,
    });
  return {
    profile,
    isloadingProfile,
    managedRestaurant,
    isLoadingManagedRestaurant,
  };
};
