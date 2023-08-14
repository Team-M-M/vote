'use client';

import colors from '@constants/colors';
import { changePhone } from '@utils/formatting';
import { Children, HTMLAttributes, InputHTMLAttributes, ReactElement, cloneElement, useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children: ReactElement;
  bottomText?: string;
}

export function Input({ label, children, bottomText, ...props }: InputProps) {
  const child = Children.only(children);
  const isError: boolean = child.props.error ?? false;

  return (
    <div style={{ width: '100%' }} {...props}>
      <label
        // htmlFor={id}
        className='inline-block py-[5px] text-base font-medium text-gray-600'
      >
        {label}
      </label>
      {cloneElement(
        child,
        { ...child.props }
      )}

      {/* {bottomText != null ? (
        <p
          style={{
            color: isError ? colors.red600 : colors.grey600,
            marginTop: '4px',
            display: 'inline-block',
            fontWeight: 400,
            fontSize: '15px',
          }}
        >
          {bottomText}
        </p>
      ) : null} */}
    </div>
  );
}

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  error?: boolean;
}
Input.PhoneField = ({ ...props }: any) => {
  const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  const { control, setValue } = useFormContext();

  const phoneValue = useWatch({
    control,
    name: 'phone'
  }) ?? ''

  // 수정
  useEffect(() => {
    if (phoneValue.length === 13 && props.trigger && props.error) {
      regPhone.test(phoneValue) && props.setData(phoneValue);
      regPhone.test(phoneValue) && props.trigger(true);
      !regPhone.test(phoneValue) && props.error(true);
    }
    if (phoneValue.length !== 13 && props.trigger && props.error) {
      props.trigger(false);
      props.error(false);
    }
  }, [phoneValue]);

  return (
    <input
      placeholder={props.placeholder ?? ''}
      maxLength={props.maxLength ?? 8}
      className="accessInput"
      value={phoneValue}
      onChange={(e) => setValue("phone", changePhone(e.target.value))}
    />
  );
};

Input.AccessFiled = ({ id, ...props }: any) => {
  return (
    <input
      type='number'
      placeholder={props.placeholder ?? ''}
      maxLength={props.maxLength ?? 8}
      className="accessInput"
      ref={props.accessRef}
    />
  );
};
