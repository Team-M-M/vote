import { AdressPage } from '@components/Container/AdressPage';
import { cookies } from 'next/headers';

const Page = () => {
  const cookie = cookies();
  const { name, id, address } = JSON.parse(cookie.get('user')?.value!);

  return (
    <main className="min-h-screen">
      <AdressPage data={{ name, id, address }} />
    </main>
  );
};

export default Page;
