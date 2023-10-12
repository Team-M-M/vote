import { BackHeader } from '@components/Common/Header/backHead';
import AccountPage from '@components/Container/AccountPage';
import { cookies } from 'next/headers';

const Page = () => {
  console.log(cookies().get('user')?.value!, 'cookie :::');
  const user = cookies().get('user')?.value! ? JSON.parse(cookies().get('user')?.value!) : { phone: '', name: '' };

  return (
    <main>
      <BackHeader />
      <AccountPage />
      <p>{user?.phone}</p>
      <p>{user?.name}</p>
      {/* <KeyPad /> */}
    </main>
  );
};
export default Page;
