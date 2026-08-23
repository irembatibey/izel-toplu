import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  type?: never;
  disabled?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  type: 'button' | 'submit';
  disabled?: boolean;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

// Design-token-only variant styles — no hardcoded colors, no
// hex/rgb values, everything traces to a Tailwind theme token.
const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-cta text-neutral-bg shadow-md hover:bg-brand-cta-dark hover:shadow-lg',
  secondary: 'bg-brand-800 text-neutral-bg hover:bg-brand-900',
  ghost:
    'border border-brand-300 text-brand-800 hover:border-brand-cta hover:bg-brand-surface',
};

const SHARED_CLASSES =
  'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-body font-semibold transition-all duration-280 ease-brand-ease hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0';

/**
 * Server component when used as a link (href) — the vast majority
 * of usages sitewide, unaffected by this change. Phase 6 adds a
 * second, button-element mode (type="submit"/"button") for the
 * contact form's submit action, which genuinely needs to be a
 * <button>, not a Link — this keeps both variants visually and
 * behaviorally consistent instead of the contact form needing its
 * own separately-styled submit button.
 */
export function Button(props: ButtonProps) {
  const { children, variant = 'primary', showArrow = false, className } = props;
  const classes = clsx(SHARED_CLASSES, VARIANT_STYLES[variant], className);

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-280 ease-brand-ease group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (props.href) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={props.type} disabled={props.disabled} className={classes}>
      {content}
    </button>
  );
}