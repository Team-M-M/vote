import { BackHeader } from '@components/Common/Header/backHead';
import { Input } from '@components/Common/Input';
import { KeyPad } from '@components/Common/Modal/Keypad';
import AccountPage from '@components/Container/AccountPage';

const Page = () => {
  return (
    <main className="h-screen">
      <BackHeader />
      <AccountPage />
      <KeyPad />
    </main>
  );
};
export default Page;
