'use client'

import Lottie from "react-lottie-player";
import lottieJson from "../../public/images/loading.json"

export default function Loading() {
  return (
    <div className="bg-white text-black px-5">
      <div className="flex justify-center items-center">
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 350, height: 350 }}
        />
      </div>
    </div>
  );
}