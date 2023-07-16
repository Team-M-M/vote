import VotePage from '@components/Container/VotePage';
import { API_URL } from '@constants/apiUrl';
import { getDataV1 } from 'lib/fetchApi';

const Page = async ({ params }: { params: { adress: string } }) => {
  const { adress } = params;


  const data = await getDataV1(API_URL.CANDIDATE + '/' + adress);

  return (
    <main>
      <VotePage data={data} />
    </main>
  );
};

export default Page;
