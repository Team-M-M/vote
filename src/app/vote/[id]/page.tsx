import VotePage, { VoteData } from '@components/Container/VotePage';
import { API_URL } from '@constants/apiUrl';
import { getDataV2 } from 'lib/fetchApi';
import { cookies } from 'next/headers';

type PageProps = {
  params: { id: string };
  searchParams: { title: string; majority: string };
};

type DataTypes = {
  data: VoteData[];
  desc: Array<{ sequence: number; description: string }>;
};

const Page = async ({ params, searchParams }: PageProps) => {
  const { id } = params;
  const { title, majority } = searchParams;

  console.log(cookies().get('user')?.value);

  const { name, id: userId, phone, dongho } = JSON.parse(cookies().get('user')?.value!);

  const { data, desc }: DataTypes = await getDataV2(API_URL.CANDIDATE + '/' + id, { method: 'GET', cache: 'no-cache' });

  return (
    <main>
      <VotePage
        data={data}
        desc={desc}
        title={title}
        majority={majority}
        userData={{ name, userId, phone, id, dongho }}
      />
    </main>
  );
};

export default Page;
