import { vi } from 'vitest';
import { render, screen, userEvent } from '@/tests/utils';
import { Pagination } from './pagination';

const onPageChangeCallback = vi.fn();
describe('<Pagination/>', () => {
  it('should display the right amount of pages and results', () => {
    render(
      <Pagination
        onPageChange={onPageChangeCallback}
        pageIndex={0}
        perPage={10}
        totalCount={200}
      />
    );

    const pageCountTextElement = screen.getByText('Página 1 de 20');
    const pageItensAmountTextElement = screen.getByText('Total de 200 item(s)');

    expect(pageCountTextElement).toBeInTheDocument();
    expect(pageItensAmountTextElement).toBeInTheDocument();
  });

  it('should be able to navigate to the next page', async () => {
    render(
      <Pagination
        onPageChange={onPageChangeCallback}
        pageIndex={0}
        perPage={10}
        totalCount={200}
      />
    );

    const nextPageButton = screen.getByRole('button', {
      name: 'Próxima página',
    });

    const user = userEvent.setup();

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });
  it('should be able to navigate to the previous page', async () => {
    render(
      <Pagination
        onPageChange={onPageChangeCallback}
        pageIndex={5}
        perPage={10}
        totalCount={200}
      />
    );

    const previousPageButton = screen.getByRole('button', {
      name: 'Página anterior',
    });

    const user = userEvent.setup();

    await user.click(previousPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(4);
  });

  it('should be able to navigate to the first page', async () => {
    render(
      <Pagination
        onPageChange={onPageChangeCallback}
        pageIndex={5}
        perPage={10}
        totalCount={200}
      />
    );

    const firstPageButton = screen.getByRole('button', {
      name: 'Primeira página',
    });

    const user = userEvent.setup();

    await user.click(firstPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(0);
  });

  it('should be able to navigate to the first page', async () => {
    render(
      <Pagination
        onPageChange={onPageChangeCallback}
        pageIndex={0}
        perPage={10}
        totalCount={200}
      />
    );

    const lastPageButton = screen.getByRole('button', {
      name: 'Ultima página',
    });

    const user = userEvent.setup();

    await user.click(lastPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(19);
  });
});
