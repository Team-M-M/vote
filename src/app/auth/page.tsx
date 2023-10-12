import { BackHeader } from '@components/Common/Header/backHead';
import AccountPage from '@components/Container/AccountPage';
import { cookies } from 'next/headers';

const Page = () => {
  const cookie = cookies();
  const { name, id, detail, phone } = JSON.parse(cookie.get('user')?.value!);

  return (
    <main>
      <BackHeader />
      <AccountPage />
      <p>{phone}</p>
      <p>{name}</p>
      {/* <KeyPad /> */}
    </main>
  );
};
export default Page;
