import VotePage from '@components/Container/VotePage';
import { API_URL } from '@constants/apiUrl';
import { getDataV1 } from 'lib/fetchApi';
import { cookies } from 'next/headers';

const Page = async ({ params, searchParams }: { params: { id: string }; searchParams: { title: string } }) => {
  const { id } = params;
  const { title } = searchParams;

  const { name, id: userId, detail, phone } = JSON.parse(cookies().get('user')?.value!);

  const data = await getDataV1(API_URL.CANDIDATE + '/' + id, { method: 'GET', cache: 'no-cache' });

  return (
    <main>
      <VotePage data={data} title={title} userData={{ name, userId, phone, id }} />
    </main>
  );
};

export default Page;
