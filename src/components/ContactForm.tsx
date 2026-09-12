'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium block mb-1">{t('name')}</label>
        <input name="name" required className="w-full border border-line rounded-lg px-3 py-2" />
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">{t('email')}</label>
        <input type="email" name="email" required className="w-full border border-line rounded-lg px-3 py-2" />
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">{t('phone')}</label>
        <input name="phone" className="w-full border border-line rounded-lg px-3 py-2" />
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">{t('subject')}</label>
        <input name="subject" className="w-full border border-line rounded-lg px-3 py-2" />
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">{t('message')}</label>
        <textarea name="message" required rows={5} className="w-full border border-line rounded-lg px-3 py-2" />
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn-donate">
        {status === 'sending' ? t('sending') : t('send')}
      </button>

      {status === 'success' && <p className="text-greenMid text-sm">{t('success')}</p>}
      {status === 'error' && <p className="text-maroon text-sm">{t('error')}</p>}
    </form>
  );
}
