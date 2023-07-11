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
    </>
  )
}