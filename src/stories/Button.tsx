import React, { useState } from 'react';
import './button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => { action: 'onClick' };
  color?: string;
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  color,
  ...props
}: ButtonProps) => {
  const [sendFriendRequest, setSendFriendRequest] = useState<boolean>(false);
  const addFriendHandler = () => {
    setSendFriendRequest(!sendFriendRequest);
  };
  return (
    <button
      style={{ backgroundColor, color }}
      type="button"
      className={
        !sendFriendRequest
          ? `follow-btn-${size}`
          : `requested follow-btn-${size}`
      }
      onClick={addFriendHandler}
    >
      {!sendFriendRequest ? label : 'Requested'}
    </button>
  );
};

//   const [clicked, setClicked] = useState<boolean>(false);

//   const clickHandler = () => {
//     setClicked(true);

//     setTimeout(() => {
//       setClicked(false);
//     }, 1000);
//   };

//   return (
//     <button
//       type="submit"
//       className={[`loading-btn-${size} loading-btn-spinner-${size}`].join('')}
//       onClick={clickHandler}
//       style={{ backgroundColor, color }}
//     >
//       {!clicked ? label : <span className="loader-spinner-icon"></span>}
//     </button>
//   );
// };
