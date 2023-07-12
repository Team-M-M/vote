import { headers } from "next/dist/client/components/headers";
import { cookies } from 'next/headers'


export default function Home() {
  // const headersList = headers()
  // headersList.get('')

  const cookieStore = cookies()
  const member = cookieStore.get('member')

  console.log(member?.value)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>전자투표 시스템</div>
    </main>
  );
}
