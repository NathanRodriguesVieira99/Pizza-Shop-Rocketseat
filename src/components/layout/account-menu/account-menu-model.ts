import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { HttpClient } from '@/infra/http/HttpClient';
import { SignOutService } from '@/services/api/sign-out';

const httpClient = HttpClient.create();
const signOutService = new SignOutService(httpClient);

export const useAccountMenuModel = () => {
  const navigate = useNavigate();

  const { mutateAsync: SignOutFn, isPending: isSigningOut } = useMutation({
    mutationFn: () => signOutService.exec(),
    onSuccess: () => {
      navigate('/signin', { replace: true });
    },
  });

  return {
    SignOutFn,
    isSigningOut,
  };
};
