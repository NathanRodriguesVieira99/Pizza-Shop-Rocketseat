import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Building, ChevronDown, LogOut } from 'lucide-react';
import { Button } from '../../ui/button';
import { DropdownMenu } from '../../ui/dropdown-menu';

export const AccountMenu = () => {
  // !! FIX -> refazer os estilos do dropdown (está quebrado, talvez o shadcn tenha atualizado)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex select-none items-center gap-2"
          variant="outline"
        >
          Pizza Shop
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Nathan Rodrigues</span>
          <span className="font-normal text-muted-foreground text-xs">
            nathanrodriguesvieira99@gmail.com
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="" />

        <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
