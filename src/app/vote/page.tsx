import { VoteListContainer } from '@components/Container/VoteListPage';
import { API_URL } from '@constants/apiUrl';
import { postDataV1 } from 'lib/fetchApi';
import { cookies } from 'next/headers';

const Page = async () => {
  //! 추후 유저 정보를 받는 것이 좋겠다.
  const { name, id, detail, phone } = JSON.parse(cookies().get('user')?.value!);

  const data = await postDataV1(API_URL.VOTE_LIST, { phone });

  return <VoteListContainer title={data?.title} data={data?.data} user={{ name, id, detail, phone }} />;
};

export default Page;
