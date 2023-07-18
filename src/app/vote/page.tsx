import { VoteListContainer } from "@components/Container/VoteListPage"
import { API_URL } from "@constants/apiUrl";
import { getDataV1 } from "lib/fetchApi";
import { cookies } from "next/headers";


const Page = async () => {

  //! 추후 유저 정보를 받는 것이 좋겠다.
  const data = await getDataV1(API_URL.VOTE_LIST);
  console.log(data, 'data :::')

  const { name, id, detail } = JSON.parse(cookies().get('user')?.value!);

  return (
    <VoteListContainer data={data} user={{ name, id, detail }} />
  )
}

export default Page