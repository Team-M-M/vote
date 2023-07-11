import { ChartBox } from "@components/Common/Box/Chart"
import { BackHeader } from "@components/Common/Header/backHead"


const Page = () => {

  return (
    <div className="h-screen justify-start items-stretch flex-col  px-10">
      <div className='h-[80px]'></div>
      <p className="text-4xl font-bold py-4 text-center">투표 현황</p>
      <ChartBox />
      <p className="text-center text-lg font-medium text-gray-600">투표율 <span>25%</span></p>
      <ChartBox />
      <p className="text-center text-lg font-medium text-gray-600">투표율 <span>28%</span></p>
    </div>
  )
}

export default Page