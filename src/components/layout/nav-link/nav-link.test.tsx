import { MemoryRouter, NavLink } from 'react-router';
import { render, screen } from '@/tests/utils';

describe('<NavLink/>', () => {
  it('should highlight the nav link when is the current page link', () => {
    render(
      <>
        <NavLink to={'/home'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </>,
      {
        wrapper: ({ children }: { children: React.ReactNode }) => (
          <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
        ),
      }
    );

    expect(screen.getByText('Home')).not.toHaveAttribute(
      'aria-current',
      'page'
    );
    expect(screen.getByText('About')).toHaveAttribute('aria-current', 'page');
  });
});
