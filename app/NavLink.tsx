"use client";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ children, className = "", ...props }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={clsx(className, {
        "underline underline-offset-4": props.href === pathname,
      })}
    >
      {children}
    </Link>
  );
};

export default NavLink;
