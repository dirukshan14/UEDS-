'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const form = new FormData(e.currentTarget);

    const res = await signIn('credentials', {
      email: form.get('email'),
      password: form.get('password'),
      redirect: false
    });

    setLoading(false);
    if (res?.error) {
      setError('Invalid email or password.');
    } else {
      router.push('/admin');
      router.refresh();
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium block mb-1">Email</label>
        <input name="email" type="email" required className="w-full border border-line rounded-lg px-3 py-2" />
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">Password</label>
        <input name="password" type="password" required className="w-full border border-line rounded-lg px-3 py-2" />
      </div>
      {error && <p className="text-maroon text-sm">{error}</p>}
      <button type="submit" disabled={loading} className="btn-donate w-full text-center">
        {loading ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  );
}
