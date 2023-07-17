'use client'

import { Spacing } from "@components/Common/Spacing"
import { useRouter } from "next/navigation"

const MainContainer = ({ user }: { user: boolean }) => {

  const router = useRouter()

  return (
    <main className='bg-main h-screen'>
      <section className="flex flex-col items-center justify-center py-24 px-3">
        <Spacing size={150} />
        <h1 className='text-xl text-white font-bold' >전자 투표 솔루션</h1>
        <Spacing size={20} />
        <div className='w-full flex justify-center items-center'>
          <span className='text-white font-bold text-8xl pr-1'>V</span>
          <img src="/images/logo.png" alt="" className='h-20 pr-1' />
          <span className='text-white font-bold text-8xl pr-1'>T</span>
          <span className='text-white font-bold text-8xl'>E</span>
        </div>
        <Spacing size={190} />
        <button
          className={'bg-gray-50 w-11/12 rounded-lg text-main font-bold text-2xl px-4 py-3'}
          style={{ boxShadow: 'inset 2px 2px 5px 1px #999999' }}
          onClick={() => user ? router.push('/1') : router.push('/account')}
        >
          투표하러 가기
        </button>
      </section>
    </main>
  )
}

export default MainContainer