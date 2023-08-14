'use client';

import { changePhone } from '@utils/formatting';
import { Children, HTMLAttributes, InputHTMLAttributes, ReactElement, cloneElement, useEffect } from 'react';
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
  const { setData, trigger, error } = props
  const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  const { control, setValue } = useFormContext();

  const phoneValue = useWatch({
    control,
    name: 'phone'
  }) ?? ''

  useEffect(() => {
    if (phoneValue.length === 13 && regPhone.test(phoneValue)) {
      setData(phoneValue);
      trigger(true);
      !regPhone.test(phoneValue) && error(true);
    }
    else {
      trigger(false);
      error(false);
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

Input.AccessFiled = ({ secret, ...props }: any) => {
  const { register } = useFormContext();

  return (
    <input
      type='number'
      className="accessInput"
      {...register('accessKey', {
        required: '인증번호를 입력해주세요',
        validate: value => value === secret
      })}
      {...props}
    />
  );
};
