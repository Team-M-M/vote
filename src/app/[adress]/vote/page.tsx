import VotePage from "@components/Container/VotePage"

const Page = ({ params }: { params: { adress: string } }) => {
  console.log(params, 'params :::')

  return (
    <main>
      <VotePage />
    </main>
  )
}

export default Page