import { useQuery } from '@tanstack/react-query';
import { HttpClient } from '@/infra/http/HttpClient';
import { GetPopularProductsService } from '@/services/api/get-popular-products';

const httpClient = HttpClient.create();
const getPopularProductsService = new GetPopularProductsService(httpClient);

export const usePopularOrdersChartModel = () => {
  const { data: popularProducts } = useQuery({
    queryKey: ['metrics', 'popular-products'],
    queryFn: () => getPopularProductsService.exec(),
  });

  return { popularProducts };
};
