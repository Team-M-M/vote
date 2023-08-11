import MainContainer from '@components/Container/MainPage';
import { cookies } from 'next/headers';

export default function Home() {

  const user = !!(cookies().get('user')?.value!);

  return <MainContainer user={user} />;
}
