"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  activeClassName?: string;
  pendingClassName?: string; // kept for API compatibility
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      href,
      className,
      activeClassName,
      pendingClassName, // not used in Next, but safe
      ...props
    },
    ref
  ) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        ref={ref}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };