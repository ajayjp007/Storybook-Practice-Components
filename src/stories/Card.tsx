import React, { useState } from 'react';
import './Card.css';
import { Modal } from './Modal';

interface CardProps {
  variant?: 'centered' | 'normal';
  backgroundColor?: string;
  color?: string;
  cardHeader?: string;
  imageUrl?: any;
  cardFooter?: any;
}

export const Card = ({
  variant = 'normal',
  backgroundColor,
  color,
  cardHeader = 'Header',
  imageUrl,
  cardFooter = 'Footer',
  ...props
}: CardProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const cardClass =
    variant === 'centered'
      ? 'centered-card-main-container'
      : 'card-main-container';
  const openModalHandler = () => {
    setModalVisible(true);
  };
  return (
    <div className={cardClass} style={{ backgroundColor, color }}>
      {modalVisible && (
        <Modal
          modalHeader="Options"
          rows={['Follow', 'Unfollow', 'Delete', 'Block', 'Close']}
          open={modalVisible}
        />
      )}
      <div className="card-header">
        {cardHeader}
        <button
          className="more-options"
          type="button"
          onClick={openModalHandler}
        />
      </div>
      <img
        className="post-image"
        alt=""
        src={
          imageUrl === ''
            ? 'https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            : imageUrl
        }
      />
      <div className="card-footer">{cardFooter}</div>
    </div>
  );
};
