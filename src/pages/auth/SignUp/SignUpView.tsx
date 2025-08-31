/** biome-ignore-all lint/a11y/useValidAnchor: i don't have any Terms of service and privacy politics pages */
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { useSignUpModel } from './SignUpModel';

type SignUpViewProps = ReturnType<typeof useSignUpModel>;

export const SignUpView = (props: SignUpViewProps) => {
  const { register, handleSignUp, isSubmitting } = props;

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button asChild className="absolute top-8 right-8" variant={'ghost'}>
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-semibold text-2xl tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-muted-foreground">
              Seja um parceiro e comece suas vendas
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSignUp}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
              />

              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />

              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />

              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="tel" {...register('phone')} />

              <Button className="w-full" disabled={isSubmitting} type="submit">
                Finalizar cadastro
              </Button>

              <p className="px-6 text-center text-muted-foreground text-sm leading-relaxed">
                Ao continuar, você concorda com nossos{' '}
                <a className="underline underline-offset-4" href="#">
                  termos de serviço
                </a>{' '}
                e{' '}
                <a className="underline underline-offset-4" href="#">
                  políticas de privacidade
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
