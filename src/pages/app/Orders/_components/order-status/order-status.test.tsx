import { render, screen } from '@/tests/utils';
import { OrderStatus } from './order-status';

describe('<OrderStatus/>', () => {
  it('should display the right text when order status is Pending', () => {
    render(<OrderStatus status="pending" />);

    const statusText = screen.getByText('Pendente');
    const badgeElement = screen.getByTestId('badge');

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-slate-400');
  });

  it('should display the right text when order status is Canceled', () => {
    render(<OrderStatus status="canceled" />);

    const statusText = screen.getByText('Cancelado');
    const badgeElement = screen.getByTestId('badge');

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-rose-500');
  });

  it('should display the right text when order status is Delivering', () => {
    render(<OrderStatus status="delivering" />);

    const statusText = screen.getByText('Em entrega');
    const badgeElement = screen.getByTestId('badge');

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-amber-500');
  });

  it('should display the right text when order status is Processing', () => {
    render(<OrderStatus status="processing" />);

    const statusText = screen.getByText('Em preparo');
    const badgeElement = screen.getByTestId('badge');

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-amber-500');
  });
});

it('should display the right text when order status is Delivered', () => {
  render(<OrderStatus status="delivered" />);

  const statusText = screen.getByText('Entregue');
  const badgeElement = screen.getByTestId('badge');

  expect(statusText).toBeInTheDocument();
  expect(badgeElement).toHaveClass('bg-emerald-500');
});
