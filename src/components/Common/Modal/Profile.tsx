'use client';

import Image from 'next/image';

export const ProfileModal = ({ open, setOpen, data }: any) => {
  return (
    <div className={open ? 'pop_layer_set on' : 'pop_layer_set'} id="pop_notice">
      <div className="pop_layer">
        <div className="flex justify-center p-3 ">
          <button type="button" className="h-1.5 w-60 bg-gray-300 rounded-lg" onClick={() => setOpen(false)}></button>
        </div>
        <div className="h-[20px]"></div>
        <div className="pop_con">
          <div className="flex justify-center">
            <p className="text-gray-600 font-bold text-2xl">
              {data.kiho} {data.name}
            </p>
          </div>
          <div className="flex justify-end px-5">
            <button className="text-main font-semibold" onClick={() => window.open(data.link)}>
              자세히 보기
            </button>
          </div>
        </div>
        <div className="flex justify-start py-4 mx-5 px-5 border-b-gray-300 border-b-[1px] text-gray-500">
          {/* <div className="h-24 w-24 px-3 box-content"> */}
          <div className="aspect-auto h-40 w-28 relative rounded-xl border-[3px] border-gray-400 overflow-hidden box-border">
            <Image
              fill
              src={data.profile}
              className="object-cover"
              alt="후보 이미지"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8uAkAAjoBdVljJRcAAAAASUVORK5CYII="
            />
          </div>
          <div className="flex-1">
            <p className="pb-3 pl-3 pt-2">
              이름 <strong>{data.name}</strong>
            </p>
            <p className="pb-3 pl-3">
              성별 <strong>{data.sex ? '여자' : '남자'}</strong>
            </p>
            <p className="pb-3 pl-3">
              나이 <strong>{data.age}</strong>
            </p>
          </div>
        </div>
        {/* <div className="w-80 px-2 h-1 bg-main" /> */}
        <div className="p-3 text-gray-600">
          <p className="p-2 font-medium">
            <span>{data.history1}</span>
          </p>
          <p className="p-2">
            <span>{data.history2}</span>
          </p>
          <p className="p-2">
            <span>{data.history3}</span>
          </p>
          <p className="p-2">
            <span>{data.history4}</span>
          </p>
          <p className="p-2">
            <span>{data.history5}</span>
          </p>
        </div>
        <div className="h-[20px]"></div>
      </div>
      <div className="modal" style={{ display: 'block' }} onClick={() => setOpen(false)}></div>
    </div>
  );
};
