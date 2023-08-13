'use client';

import Lottie from 'react-lottie-player';
import lottieJson from '../../../../public/images/loading.json';
import { Spacing } from '../Spacing';

export default function LoadingPage() {
  return (
    <div className="bg-white text-black px-5">
      <Spacing size={120} />
      <div className="flex justify-center items-center">
        <Lottie loop animationData={lottieJson} play style={{ width: 350, height: 350 }} />
      </div>
    </div>
  );
}
