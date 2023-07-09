import { CheckBox } from "@components/Common"
import { ProfileModal } from "@components/Common/Modal/Profile"

const Page = ({ params }: { params: { adress: string } }) => {
  console.log(params, 'params :::')

  return (
    <main>
      <div><CheckBox /></div>
      <ProfileModal />
    </main>
  )
}

export default Page