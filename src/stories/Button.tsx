import React, { useState } from 'react';
import './button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text-only';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => { action: "onClick" };
  color?: string,
  border?: 'none' | 'small' | 'medium' | 'large';
}


export const Button = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  color,
  border,
  ...props
}: ButtonProps) => {

  const [clicked, setClicked] = useState<boolean>(false)

  const clickHandler = () => {
    setClicked(true)

    setTimeout(() => {
      setClicked(false)
    }, 1000)
  }

  return (
    <button type="submit" className={[`loading-btn-${size} loading-btn-spinner-${size}`].join('')} onClick={clickHandler} style={{ backgroundColor, color }}>
      {!clicked ? label : <span className="loader-spinner-icon"></span>}
    </button>
  );
};
