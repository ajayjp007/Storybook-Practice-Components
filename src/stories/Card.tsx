import React from 'react';
import './Card.css';

interface CardProps {
    variant?: 'centered' | 'normal';
    backgroundColor?: string;
    color?: string;
    cardHeader?: string;
    cardBody?: string;
    cardFooter?: string;
}


export const Card = ({
    variant = 'normal',
    backgroundColor,
    color,
    cardHeader = 'Header',
    cardBody = 'Body',
    cardFooter = 'Footer',
    ...props
}: CardProps) => {
    const cardClass = variant === 'centered' ? 'centered-card-main-conatiner' : 'card-main-container';

    return (
        <div className={cardClass}>
            <div className='card-container' style={{ backgroundColor, color }}>
                <div className='card-header'>
                    {cardHeader}
                </div>

                <div className='card-body'>
                    {cardBody}
                </div>
                <div className='card-footer'>
                    {cardFooter}
                </div>
            </div>
        </div>
    );
};