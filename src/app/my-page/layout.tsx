import { BackHeader } from '@components/Common/Header/backHead';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const cookie = cookies();
  cookie.get('user')?.value ?? redirect('/auth');

  return (
    <main>
      <BackHeader />
      {children}
    </main>
  );
}
