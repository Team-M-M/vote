import { BackHeader } from '@components/Common/Header/backHead';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const cookie = cookies();
  cookie.get('user') ?? redirect('/auth');

  return (
    <main className="h-full bg-gray-100">
      <BackHeader />
      {children}
    </main>
  );
}
