import { NAV_LINKS } from '@/lib/constants';
import { NavLink } from './NavLink';

/**
 * Server component. Renders the nav structure and labels at build
 * time; only the individual NavLink islands ship client JS (for
 * active-state detection). Hidden below the md breakpoint — MobileNav
 * takes over there.
 */
export function DesktopNav() {
  return (
    <nav aria-label="Ana menü" className="hidden md:block">
      <ul className="flex items-center gap-8 text-body">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
