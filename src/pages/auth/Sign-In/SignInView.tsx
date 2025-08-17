import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { useSignInModel } from './SignInModel';

type SignInViewProps = ReturnType<typeof useSignInModel>;

export const SignInView = (props: SignInViewProps) => {
  const { register, handleSignIn, isSubmitting } = props;

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8 ">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-semibold text-2xl tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-muted-foreground text-sm">
              Acompanhe suas vendas pelo painel do parceiro{' '}
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSignIn}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button className="w-full" disabled={isSubmitting} type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
