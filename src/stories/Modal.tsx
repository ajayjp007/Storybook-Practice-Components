import React, { useState } from 'react';
import './Modal.css';

interface ModalProps {
  backgroundColor?: string;
  color?: string;
  modalHeader?: string;
  modalFooter?: string;
  rows: Array<string>;
  open: boolean;
}

export const Modal = ({
  backgroundColor,
  color,
  modalHeader = 'Header',
  modalFooter = 'Footer',
  rows = [],
  open,
  ...props
}: ModalProps) => {
  return (
    <div className="modal-main-center">
      <div className="modal-container" style={{ backgroundColor, color }}>
        <div className="modal-header">{modalHeader}</div>
        <div className="modal-body">
          {rows.map((element, index) => {
            return (
              <button className="modal-options" type="button">
                {element}
              </button>
            );
          })}
        </div>
        <button type="button" className="modal-footer">
          <img
            className="close-btn-icon"
            src="https://www.svgrepo.com/show/273966/close.svg"
            alt="close"
          />
          Close
        </button>
      </div>
    </div>
  );
};
