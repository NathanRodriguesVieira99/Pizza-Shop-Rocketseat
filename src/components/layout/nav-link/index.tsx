import { Link, type LinkProps, useLocation } from 'react-router';

interface NavLinkProps extends LinkProps {}

export const NavLink = (props: NavLinkProps) => {
  const { pathname } = useLocation();

  return (
    <Link
      data-current={pathname === props.to}
      {...props}
      className="flex items-center gap-1.5 font-medium text-muted-foreground text-sm hover:text-foreground data-[current=true]:text-foreground"
    />
  );
};
