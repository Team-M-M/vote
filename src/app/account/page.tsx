import { BackHeader } from '@components/Common/Header/backHead';
import { Input } from '@components/Common/Input';
import { KeyPad } from '@components/Common/Modal/Keypad';
import { ToastContainer } from '@components/Common/Modal/Toast';
import AccountPage from '@components/Container/AccountPage';

const Page = () => {
  return (
    <main className="h-screen">
      <BackHeader />
      <AccountPage />
      {/* <KeyPad /> */}
      <ToastContainer duration={5000} transitionPercentage={30} color={'#90c2ff'} message={'김민섭 최재익'} />
    </main>
  );
};
export default Page;
