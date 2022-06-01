import React from 'react';
import './Input.css';
import { useRef } from 'react';

interface InputProps {
  variant?:
    | 'text'
    | 'email'
    | 'password'
    | 'date'
    | 'number'
    | 'file'
    | 'checkbox'
    | 'month'
    | 'time'
    | 'range';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  placeholder: string;
  color?: string;
  border?: 'solid' | 'dashed' | 'none' | 'groove';
  borderColor?: string;
  type?: 'Type 1' | 'Type 2';
}

export const Input = ({
  variant = 'text',
  size = 'medium',
  backgroundColor,
  placeholder,
  color,
  border = 'solid',
  borderColor,
  type = 'Type 1',
  ...props
}: InputProps) => {
  const setClassName =
    type === 'Type 1' ? 'input-container-type1' : 'input-container';
  const passwordInputRef = useRef<HTMLInputElement>(null);
  return (
    <input
      required
      placeholder={placeholder}
      // ref={passwordInputRef}
      style={{ backgroundColor, color, border, borderColor }}
      className={[
        'input-container',
        `input-container--${size}`,
        setClassName,
      ].join(' ')}
      type={variant}
      {...props}
    />
  );
};
