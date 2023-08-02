import { AdressPage } from '@components/Container/AdressPage';
import { cookies } from 'next/headers';

const Page = () => {
  const cookie = cookies();
  const { name, id, address } = JSON.parse(cookie.get('user')?.value!);

  return (
    <>
      <AdressPage data={{ name, id, address }} />
    </>
  );
};

export default Page;
