import { MemoryRouter } from 'react-router';
import { vi } from 'vitest';
import { Providers, render, screen } from '@/tests/utils';
import { useSignInModel } from './SignInModel';
import { SignInView } from './SignInView';

describe('<SignInView/>', () => {
  it('should set default email input value if email is present on search params ', () => {
    const SignInViewWhitProps = () => {
      const props = useSignInModel({ SignInService: { exec: vi.fn() } });
      return <SignInView {...props} />;
    };

    render(<SignInViewWhitProps />, {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <Providers>
          <MemoryRouter initialEntries={['/signin?email=jhondoe@example.com']}>
            {children}
          </MemoryRouter>
        </Providers>
      ),
    });

    const emailInput = screen.getByLabelText('Seu e-mail') as HTMLInputElement;

    expect(emailInput.value).toEqual('jhondoe@example.com');
  });
});
