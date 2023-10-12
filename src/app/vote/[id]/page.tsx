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
  desc: { sequence: number; description: string }[];
};

const Page = async ({ params, searchParams }: PageProps) => {
  const { id } = params;
  const { title, majority } = searchParams;

  const { name, id: userId, phone, dongho } = JSON.parse(cookies().get('user')?.value!);

  const data: DataTypes = await getDataV2(API_URL.CANDIDATE + '/' + id, {
    method: 'GET',
    next: { revalidate: 60 * 30 },
  });

  return (
    <main>
      <VotePage
        data={data?.data}
        desc={data?.desc}
        title={title}
        majority={majority}
        userData={{ name, userId, phone, id, dongho }}
      />
    </main>
  );
};

export default Page;
