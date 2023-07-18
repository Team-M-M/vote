import { AdressPage } from '@components/Container/AdressPage';
import { cookies } from 'next/headers';

const Page = () => {
  const cookie = cookies();
  const { name, id, detail } = JSON.parse(cookie.get('user')?.value!);

  return (
    <>
      <AdressPage data={{ name, id, detail }} />
    </>
  );
};

export default Page;
