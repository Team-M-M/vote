'use client';

import colors from '@constants/colors';
import {
  Children,
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children: ReactElement;
  bottomText?: string;
}

export function Input({ label, children, bottomText, ...props }: InputProps) {
  const child = Children.only(children);
  // const generatedId = useId('input');
  // const id = child.props.id ?? generatedId;
  const id = label?.includes('휴대전화');
  const isError: boolean = child.props.error ?? false;
  const phoneRef = useRef(null);

  return (
    <div style={{ width: '100%' }} {...props}>
      <label
        // htmlFor={id}
        style={{
          display: 'inline-block',
          padding: '5px 0',
          fontSize: '15px',
          fontWeight: '500',
          lineHeight: 1.6,
          color: colors.grey600,
        }}
      >
        {label}
      </label>
      {cloneElement(
        child,
        { phoneRef, id, ...child.props } /*  {
        ref: '하이'
      } */
      )}
      {/* <TextField /> */}
      {bottomText != null ? (
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
      ) : null}
    </div>
  );
}

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  error?: boolean;
}
Input.TextField = forwardRef(({ id, phoneRef, ...props }: any /* , ref?: ForwardedRef<HTMLInputElement> */) => {
  // const [focus, setFocus] = useState({
  //   backgroundColor: colors.grey100
  // });
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (props.trigger) {
      phone.length === 13 && props.trigger(true)
      phone.length !== 13 && props.trigger(false)
    }
  }, [phone])

  return (
    <input
      // onFocus={e => setFocus({ backgroundColor: colors.grey200 })}
      // onBlur={e => setFocus({ backgroundColor: colors.grey100 })}
      placeholder={props.placeholder ?? ''}
      maxLength={props.maxLength ?? 8}
      className="accessInput"
      value={phone}
      onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
        .replace(/(\-{1,2})$/g, ''))}
      style={{
        width: '100%',
        padding: '0 18px',
        fontSize: '15px',
        lineHeight: '48px',
        margin: 0,
        outline: 'none',
        border: 'none',
        borderRadius: '8px',
        transition: `background .2s ease,color .1s ease, box-shadow .2s ease`,
      }}
    // value={}
    // ref={phoneRef}
    // {...props}
    />
  );
});