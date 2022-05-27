import React from 'react';
import './Input.css';

interface InputProps {
    variant?: 'text' | 'email' | 'password' | 'date' | 'number' | 'file' | 'checkbox' | 'month' | 'time' | 'range';
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
    const setClassName = type === 'Type 1' ? 'input-container-type1' : 'input-container';
    return (
        <input
            placeholder={placeholder}
            type={variant}
            className={['input-container', `input-container--${size}`, setClassName].join(' ')}
            style={{ backgroundColor, color, border, borderColor }}
            {...props}
        >
        </input>
    );
};
