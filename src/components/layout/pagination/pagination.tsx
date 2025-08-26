import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
}

export const Pagination = ({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) => {
  const pages = Math.ceil(totalCount / perPage) || 1;
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground text-sm">
        Total de {totalCount} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="font-medium text-sm">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button className="h-8 w-8 p-0" variant="outline">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button className="h-8 w-8 p-0" variant="outline">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only"> Página anterior</span>
          </Button>
          <Button className="h-8 w-8 p-0" variant="outline">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button className="h-8 w-8 p-0" variant="outline">
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Ultima página</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
