import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import LoginForm from './LoginForm';

export default async function AdminLoginPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect('/admin');

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white border border-line rounded-2xl p-8 w-full max-w-sm">
        <h1 className="font-serif text-2xl text-greenDeep mb-1">UEDS Admin</h1>
        <p className="text-sm text-inkSoft mb-6">Sign in to manage the website.</p>
        <LoginForm />
      </div>
    </div>
  );
}
