import { Spacing } from '@components/Common/Spacing';
import MainContainer from '@components/Container/MainPage';
import { headers } from 'next/dist/client/components/headers';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Home() {
  // const headersList = headers()
  // headersList.get('')

  const cookieStore = cookies();
  const user = cookieStore.get('user');

  return <MainContainer user={!!user?.value} />;
}
