'use client'
import { InputHTMLAttributes, useRef } from "react"

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  error?: boolean;
}

export const CheckBox = () => {

  return (
    <>
      <label className="check_box">
        <input
          // ref={CheckRef}
          type="radio"
          id="id"
          name="name"
        // onChange={() => console.log(checkRef.current?.checked, 'checked :::')}
        />
        <span className="icon"></span>
      </label>
      <style jsx>
        {`
          .check_box input {
            display: none;
          }
          .check_box:last-child {
            margin-right: 0;
          }
          .check_box .icon {
            display: inline-block;
            width: 18px;
            height: 18px;
            box-sizing: border-box;
            border: 2px solid #bec8d0;
            border-radius: 2px;
            position: relative;
            cursor: pointer;
            vertical-align: middle;
          }
          .check_box .icon::before,
          .check_box .icon::after {
            content: '';
            display: inline-block;
            width: 3px;
            height: 0;
            background-color: #5c79f1;
            position: absolute;
            transform-origin: left top;
            border-radius: 3px;
          }
          .check_box .icon::before {
            top: 49%;
            left: 4px;
            transform: rotate(-45deg);
          }
          .check_box .icon::after {
            top: 74%;
            left: 8.5px;
            transform: rotate(-135deg);
          }
          .check_box input:checked + .icon {
            background-image: url(/images/ico_box.svg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border: none;
          }
          .check_box input:checked + .icon::before {
            height: 6px;
            transition: all 0.2s ease;
          }
          .check_box input:checked + .icon::after {
            height: 16px;
            transition: all 0.3s ease 0.2s;
          }
          `}
      </style>
    </>
  )
}