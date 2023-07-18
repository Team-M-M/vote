'use client'

import { Spacing } from "@components/Common/Spacing"
import { useRouter } from "next/navigation"
import { useState } from "react"

const MainContainer = ({ user }: { user: boolean }) => {

  const router = useRouter();
  const [hover, setHover] = useState(false);

  return (
    <main className='bg-main h-full'>
      <section className="flex flex-col items-center justify-center py-24 px-3">
        <Spacing size={120} />
        <h1 className='text-xl text-yellow-300 font-bold' >세상의 모든 투표를 모았다.</h1>
        <Spacing size={10} />
        <div className='w-full flex justify-center items-center'>
          <span className='text-white font-bold text-8xl pr-1'>V</span>
          <img src="/images/logo.png" alt="" className='h-20 pr-1' />
          <span className='text-white font-bold text-8xl pr-1'>T</span>
          <span className='text-white font-bold text-8xl'>E</span>
        </div>
        <Spacing size={190} />
        <button
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`border-[2px] w-11/12 rounded-xl ${hover ? 'text-yellow-300 border-yellow-300 scale-90' : 'border-white text-white'} font-semibold text-2xl px-4 py-3 scale-100`}
          //  style={{ boxShadow: 'inset 2px 2px 5px 1px #999999' }}
          onClick={() => user ? router.push('/my-page') : router.push('/auth')}
        >
          이용하기
        </button>
      </section>
    </main>
  )
}

export default MainContainer