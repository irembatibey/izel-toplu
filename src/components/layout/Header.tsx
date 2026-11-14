import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { SITE_NAME } from '@/lib/constants';
import { HeaderShell } from './HeaderShell';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <HeaderShell>
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-serif text-h3 text-brand-800 transition-colors duration-250 ease-brand-ease hover:text-brand-cta"
        >
          <span className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/logo-cropped.png"
              alt={`${SITE_NAME} logosu`}
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </span>

          {SITE_NAME}
        </Link>

        <DesktopNav />
        <MobileNav />
      </Container>
    </HeaderShell>
  );
}