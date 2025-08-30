import { Building, ChevronDown, LogOut } from 'lucide-react';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { useQueries } from '@/hooks/useQueries';
import { Button } from '../../ui/button';
import { DropdownMenu } from '../../ui/dropdown-menu';
import { AccountProfileDialog } from '../account-profile-dialog';
import { useAccountMenuModel } from './account-menu-model';

export const AccountMenu = () => {
  const { SignOutFn, isSigningOut } = useAccountMenuModel();
  const {
    managedRestaurant,
    isLoadingManagedRestaurant,
    profile,
    isloadingProfile,
  } = useQueries();

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="flex select-none items-center gap-2"
            variant="outline"
          >
            {isLoadingManagedRestaurant ? (
              <Skeleton className="h-4 w-40" />
            ) : (
              managedRestaurant?.name
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            {isloadingProfile ? (
              <div className=" space-y-5">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24 " />
              </div>
            ) : (
              <>
                <span>{profile?.name}</span>
                <span className="font-normal text-muted-foreground text-xs">
                  {profile?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>

          <DropdownMenuSeparator className="" />

          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="mr-2 h-4 w-4" />
              <span>Perfil da loja</span>
            </DropdownMenuItem>
          </DialogTrigger>

          <DropdownMenuItem
            asChild
            className="text-rose-500 dark:text-rose-400"
            disabled={isSigningOut}
          >
            <button
              className="w-full"
              onClick={() => SignOutFn()}
              type="button"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AccountProfileDialog />
    </Dialog>
  );
};
