import VotePage from '@components/Container/VotePage';
import { API_URL } from '@constants/apiUrl';
import { getDataV1 } from 'lib/fetchApi';

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const data = await getDataV1(API_URL.CANDIDATE + '/' + id, { method: 'GET', cache: 'no-cache' });

  return (
    <main>
      <VotePage data={data} />
    </main>
  );
};

export default Page;
