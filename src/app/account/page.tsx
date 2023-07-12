import { BackHeader } from '@components/Common/Header/backHead';
import { ToastContainer } from '@components/Common/Modal/Toast';
import AccountPage from '@components/Container/AccountPage';

const Page = () => {
  return (
    <main className="h-screen">
      <BackHeader />
      <AccountPage />
      {/* <KeyPad /> */}
    </main>
  );
};
export default Page;
