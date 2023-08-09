'use client'
import Link from "next/link";
import Lottie from "react-lottie-player";

import lottieJson from "../../public/images/404notfound.json";
import { Spacing } from "@components/Common/Spacing";

export default function NotFound() {
  return (
    <div className="bg-white text-black px-5">
      <Spacing size={120} />
      <h1 className="text-center text-main font-black text-5xl">404</h1>
      <h2 className="text-center text-gray-400 font-semibold text-base">페이지를 찾을 수 없어요</h2>
      <Spacing size={30} />
      <div className="flex justify-center items-center">
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 350, height: 350 }}
        />
      </div>
      <Spacing size={70} />
      <div className="flex justify-center items-center">
        <Link href="/" className="bg-main w-full rounded-lg text-white font-medium mx-4 py-3 text-center">홈으로 돌아가기</Link>
      </div>
    </div>
  );
}