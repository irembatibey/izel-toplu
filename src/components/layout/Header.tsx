import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { SITE_NAME } from '@/lib/constants';
import { HeaderShell } from './HeaderShell';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

/**
 * Server component. Composes the scroll-aware client shell
 * (HeaderShell) with server-rendered content passed as children —
 * this is the pattern that keeps DesktopNav's list/map logic out of
 * the client bundle, per the "prefer Server Components" requirement.
 * Only HeaderShell (scroll state) and the individual NavLink/MobileNav
 * pieces (interaction) are actual client code.
 */
export function Header() {
  return (
    <HeaderShell>
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-serif text-h3 text-brand-800 transition-colors duration-250 ease-brand-ease hover:text-brand-cta"
        >
          {SITE_NAME}
        </Link>

        <DesktopNav />
        <MobileNav />
      </Container>
    </HeaderShell>
  );
}
