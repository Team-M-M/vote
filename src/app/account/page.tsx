import { BackHeader } from '@components/Common/Header/backHead';
import { ToastContainer } from '@components/Common/Modal/Toast';
import AccountPage from '@components/Container/AccountPage';
import { cookies } from 'next/headers';

const Page = () => {
  const cookie = cookies()

  return (
    <main /* className="h-screen" */>
      <BackHeader />
      <AccountPage cookie={cookie} />
      {/* <KeyPad /> */}
    </main>
  );
};
export default Page;
