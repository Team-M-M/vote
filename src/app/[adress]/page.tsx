import { CheckBox } from "@components/Common"
import { ProfileModal } from "@components/Common/Modal/Profile"
import ProfileContainer from "@components/Container"

const Page = ({ params }: { params: { adress: string } }) => {
  console.log(params, 'params :::')

  return (
    <main>
      <div>
        <CheckBox />
      </div>
      <ProfileContainer />
    </main>
  )
}

export default Page