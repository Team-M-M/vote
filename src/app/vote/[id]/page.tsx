import VotePage from '@components/Container/VotePage';
import { API_URL } from '@constants/apiUrl';
import { getDataV1 } from 'lib/fetchApi';

const Page = async ({ params, searchParams }: { params: { id: string }, searchParams: { title: string } }) => {
  const { id } = params;
  const { title } = searchParams;


  const data = await getDataV1(API_URL.CANDIDATE + '/' + id, { method: 'GET', cache: 'no-cache' });

  return (
    <main>
      <VotePage data={data} title={title} />
    </main>
  );
};

export default Page;
