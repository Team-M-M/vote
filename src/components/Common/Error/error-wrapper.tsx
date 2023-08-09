'use client'

import Link from "next/link";
import { Spacing } from "../Spacing";
import Lottie from "react-lottie-player";

interface Type {
  code: number;
  message: string;
  jsonObj: any
}

// ! 고차 ? wrapper ? 고민중 
export function ErrorWrapper({ code, message, jsonObj }: Type) {
  return (
    <div className="bg-white text-black px-5">
      <Spacing size={120} />
      <h1 className="text-center text-main font-black text-5xl">{code}</h1>
      <h2 className="text-center text-gray-400 font-semibold text-base">{message}</h2>
      <Spacing size={30} />
      <div className="flex justify-center items-center">
        <Lottie
          loop
          animationData={jsonObj}
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