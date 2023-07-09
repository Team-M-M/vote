'use client'

import { useState } from "react";


export const ProfileModal = () => {

  const [weekClick, setWeekClick] = useState(false);

  // const [disabled, setDisabled] = useWeekCookie(weekClick);
  // console.log(disabled, 'boolean ::');
  return (
    <div className="pop_layer_set" id="pop_notice">
      <div className="pop_layer">
        <div className="pop_top">
          <button type="button" className="close" /* onClick={() => setDisabled(false)} */></button>
        </div>
        <div className="pop_con">
          <div className="notice_title">
            <p className="tit">공지사항</p>
          </div>

          <div className="nt_txt">

          </div>
          <button className="btn_orange">자세히 보기</button>
        </div>
        <div className="pop_nt_foot">
          <div className="left_div">
            <button
              type="button"
              onClick={() => {
                setWeekClick(true);
              }}
            >
              일주일동안 보지 않기
            </button>
          </div>
          <div className="right_div">
            {/* <button onClick={() => setDisabled(false)} type="button">
              닫기
            </button> */}
          </div>
        </div>
      </div>
      <div className="modal" style={{ display: 'block' }}></div>
      <style jsx>{`
      .pop_layer_set {
        visibility: hidden;
      }

      .pop_layer {
        background: #fff;
        border-radius: 30px 30px 0 0;
        z-index: 400;
        position: fixed;
        width: 100%;
        max-width: 640px;
        bottom: -100%;
        transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
        left: 50%;
      }
      .modal {
        position: fixed;
        opacity: 0.4;
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