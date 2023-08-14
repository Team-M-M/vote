import VotePage from '@components/Container/VotePage';
import { API_URL } from '@constants/apiUrl';
import { getDataV1, getDataV2 } from 'lib/fetchApi';
import { cookies } from 'next/headers';

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { title: string; majority: string };
}) => {
  const { id } = params;
  const { title, majority } = searchParams;

  console.log(cookies().get('user')?.value);

  const { name, id: userId, phone, dongho } = JSON.parse(cookies().get('user')?.value!);

  const data = await getDataV2(API_URL.CANDIDATE + '/' + id, { method: 'GET', cache: 'no-cache' });

  return (
    <main>
      <VotePage
        data={data.data}
        desc={data.desc}
        title={title}
        majority={majority}
        userData={{ name, userId, phone, id, dongho }}
      />
    </main>
  );
};

export default Page;
