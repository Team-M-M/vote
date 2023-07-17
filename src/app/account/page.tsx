import { BackHeader } from '@components/Common/Header/backHead';
import { ToastContainer } from '@components/Common/Modal/Toast';
import AccountPage from '@components/Container/AccountPage';
import { cookies } from 'next/headers';

const Page = () => {
  const cookie = cookies()

  return (
    <main >
      <BackHeader />
      <AccountPage cookie={cookie} />
      {/* <KeyPad /> */}
    </main>
  );
};
export default Page;
