import React, { useState } from 'react';
import './Modal.css';

interface ModalProps {
    backgroundColor?: string;
    color?: string;
    modalHeader?: string;
    modalFooter?: string,
    rows: Array<string>;
}


export const Modal = ({
    backgroundColor,
    color,
    modalHeader = 'Header',
    modalFooter = 'Footer',
    rows = [],
    ...props
}: ModalProps) => {



    return (
        <div className='modal-main-center'>
            <div className='modal-container' style={{ backgroundColor, color }}>
                <div className='modal-header'>
                    {modalHeader}
                </div>

                <div className='modal-body'> {
                    rows.map((element, index) => {
                        return (
                            <div className='modal-options'>{element}</div>
                        )
                    })
                }
                </div>

                <div className='modal-footer'>
                    {modalFooter}
                </div>
            </div>
        </div>
    );
};
