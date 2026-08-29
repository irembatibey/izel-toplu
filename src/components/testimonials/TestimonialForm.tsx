'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/common/Button';
import { FORMSPREE_ENDPOINT } from '@/lib/constants';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error' | 'not-configured';

const FIELD_CLASSES =
  'rounded-sm border border-neutral-border bg-neutral-bg px-4 py-3 text-body text-neutral-text placeholder:text-neutral-text-soft/70 transition-colors duration-250 ease-brand-ease focus:border-brand-cta focus:outline-none focus:ring-2 focus:ring-brand-200';

/**
 * Testimonial submission form.
 *
 * Reuses the exact same Formspree endpoint as ContactForm — no new
 * external service — with a distinguishing hidden `_subject` field
 * so submissions are easy to tell apart from general contact
 * inquiries in the therapist's inbox. Submitting this form does NOT
 * publish anything on the site automatically; see
 * src/content/testimonials.ts for the full explanation of the
 * manual review/publish step this project currently uses.
 */
export function TestimonialForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setStatus('not-configured');
      return;
    }

    setStatus('submitting');

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_ENDPOINT}`,
        {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        }
      );

      setStatus(response.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p
        role="status"
        className="rounded-md border border-brand-200 bg-brand-surface p-6 text-body text-brand-900"
      >
        Deneyiminizi paylaştığınız için teşekkürler. İncelendikten ve
        onaylandıktan sonra web sitesinde yayınlanacaktır.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input type="hidden" name="_subject" value="Yeni Danışan Yorumu" />

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="testimonial-company">Şirket</label>
        <input
          id="testimonial-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="testimonial-name" className="text-body font-semibold text-brand-800">
          Ad Soyad
        </label>
        <input
          id="testimonial-name"
          name="name"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          placeholder="Ad Soyad"
          className={FIELD_CLASSES}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="testimonial-relation" className="text-body font-semibold text-brand-800">
          Yakınlık <span className="font-normal text-neutral-text-soft">(opsiyonel)</span>
        </label>
        <input
          id="testimonial-relation"
          name="relation"
          type="text"
          maxLength={60}
          placeholder="Örn. Danışan, Veli"
          className={FIELD_CLASSES}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="testimonial-email" className="text-body font-semibold text-brand-800">
          E-posta <span className="font-normal text-neutral-text-soft">(opsiyonel, doğrulama için)</span>
        </label>
        <input
          id="testimonial-email"
          name="email"
          type="email"
          maxLength={150}
          autoComplete="email"
          placeholder="ornek@gmail.com"
          className={FIELD_CLASSES}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="testimonial-quote" className="text-body font-semibold text-brand-800">
          Yorumunuz
        </label>
        <textarea
          id="testimonial-quote"
          name="quote"
          required
          maxLength={600}
          rows={5}
          placeholder="Terapi sürecinizle ilgili deneyiminizi paylaşabilirsiniz..."
          className={`${FIELD_CLASSES} resize-y`}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="testimonial-consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 flex-shrink-0 accent-brand-cta"
        />
        <label htmlFor="testimonial-consent" className="text-caption text-neutral-text-soft">
          Bu yorumun, onaylandıktan sonra web sitesinde yayınlanmasını kabul ediyorum.
        </label>
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={status === 'submitting'}
        className="mt-1 w-full sm:w-fit"
      >
        {status === 'submitting' ? 'Gönderiliyor…' : 'Gönder'}
      </Button>

      <div aria-live="polite">
        {status === 'not-configured' && (
          <p className="text-caption text-neutral-text-soft">
            Form gönderimi şu anda aktif değil. Lütfen doğrudan iletişim
            bilgilerinden ulaşın.
          </p>
        )}

        {status === 'error' && (
          <p className="text-caption text-brand-cta-dark">
            Bir sorun oluştu, lütfen tekrar deneyin veya doğrudan iletişime
            geçin.
          </p>
        )}
      </div>
    </form>
  );
}