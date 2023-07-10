'use client'

import Image from "next/image";

export const ProfileModal = ({ open, setOpen }: any) => {

  return (
    <div className={open ? "pop_layer_set on" : "pop_layer_set"} id="pop_notice">
      <div className="pop_layer">
        <div className="flex justify-center p-3 ">
          <button type="button" className="h-1.5 w-60 bg-gray-300 rounded-lg" onClick={() => setOpen(false)}></button>
        </div>
        <div className='h-[20px]'></div>
        <div className="pop_con">
          <div className="flex justify-center">
            <p className="text-gray-600 font-bold text-2xl">후보자</p>
          </div>
          <div className="flex justify-end px-5">
            <button className="text-main font-semibold">자세히 보기</button>
          </div>
        </div>
        <div className="flex items-center justify-start p-3 text-gray-600">
          <div className="h-24 w-24 px-3 box-content">
            <Image src={'/images/POLEE.jpg'} width={100} height={100} alt="후보 이미지" />
          </div>
          <div>
            <p className="pb-1">이름 <strong>노기정</strong></p>
            <p className="pb-1">성별 <strong>남자</strong></p>
            <p className="pb-1">나이 <strong>46</strong></p>
          </div>
        </div>
        {/* <div className="w-80 px-2 h-1 bg-main" /> */}
        <div className="p-3 text-gray-600">
          <p className="p-2 text-center">현재 <span>서울대학교 총장</span></p>
          <p className="p-2 text-center">과거 <span>고려대학교 총장</span></p>
          <p className="p-2 text-center">과거 <span>연세대학교 총장</span></p>
          <p className="p-2 text-center">과거 <span>서강대학교 총장</span></p>
          <p className="p-2 text-center">과거 <span>한양대학교 총장</span></p>
        </div>
        <div className='h-[20px]'></div>
      </div>
      <div className="modal" style={{ display: 'block' }} onClick={() => setOpen(false)}>di</div>
      <style jsx>{`
      .pop_layer_set {
        visibility: hidden;
      }
      .pop_layer_set.on {
        visibility: visible;
      }
      .pop_layer_set.on .pop_layer {
      right: 50%;
      transform: translate(-50%, 0);
      bottom: 0;
      }

      .pop_layer {
        background: #fff;
        border-radius: 30px 30px 0 0;
        z-index: 400;
        position: fixed;
        width: 100%;
        max-width: 700px;
        bottom: -100%;
        right: 50%;
      transform: translate(-50%, 0);
        transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
        left: 50%;
      }
      .modal {
        position: fixed;
        opacity: 0.2;
        background-color: #000;
        width: 100%;
        height: 100vh;
        left: 0;
        top: 0;
        z-index: 301;
        display: none;
      }
        `}</style>
    </div>
  );

}