'use client';

import { useRouter } from 'next/navigation';
import { Spacing } from '../Spacing';

export const BackHeader = () => {
  const router = useRouter();

  return (
    <div>
      <nav className="fixed h-16 w-full top-0 bg-white" style={{ zIndex: 500, boxSizing: 'border-box' }}>
        <div className="flex justify-between items-center py-5 px-3 border-b-[1px] border-[#ECECEC] h-full">
          <div className="flex flex-auto items-center">
            <button
              type="button"
              className="inline-flex items-center  text-sm text-black"
              onClick={() => {
                if (window.location.pathname === '/vote') {
                  return router.push('my-page');
                } else {
                  return router.back();
                }
              }}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <Spacing size={64} />
    </div>
  );
};
