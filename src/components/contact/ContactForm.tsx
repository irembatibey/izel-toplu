'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/common/Button';
import { FORMSPREE_ENDPOINT } from '@/lib/constants';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error' | 'not-configured';

const FIELD_CLASSES =
  'rounded-sm border border-neutral-border bg-neutral-bg px-4 py-3 text-body text-neutral-text placeholder:text-neutral-text-soft/70 transition-colors duration-250 ease-brand-ease focus:border-brand-cta focus:outline-none focus:ring-2 focus:ring-brand-200';

export function ContactForm() {
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
        Mesajınız için teşekkürler. En kısa sürede size dönüş yapılacaktır.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Şirket</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-body font-semibold text-brand-800"
        >
          Ad Soyad
        </label>

        <input
          id="name"
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
        <label
          htmlFor="email"
          className="text-body font-semibold text-brand-800"
        >
          E-posta
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={150}
          autoComplete="email"
          placeholder="ornek@gmail.com"
          className={FIELD_CLASSES}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-body font-semibold text-brand-800"
        >
          Mesajınız
        </label>

        <textarea
          id="message"
          name="message"
          required
          maxLength={1000}
          rows={6}
          placeholder="Mesajınızı buraya yazabilirsiniz..."
          className={`${FIELD_CLASSES} resize-y`}
        />
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