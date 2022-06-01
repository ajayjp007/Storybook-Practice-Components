import React, { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
  backgroundColor?: string;
  color?: string;
  direction: 'row' | 'column';
  logoURL: string;
  rows: Array<string>;
}

export const Navbar = ({
  backgroundColor,
  color,
  direction = 'row',
  logoURL,
  rows = ['Company', 'About us', 'Blog'],
  ...props
}: NavbarProps) => {
  return (
    <div
      className={
        direction === 'row' ? 'navbar-container' : 'navbar-container-column'
      }
      style={{ backgroundColor, color }}
    >
      <img src={logoURL} className="logo-navbar" alt="Logo" />
      <input />
      <div
        className={
          direction === 'row'
            ? 'navbar-items-container'
            : 'navbar-items-container-column'
        }
      >
        {rows.map((element, index) => {
          return <button className="navbar-items">{element}</button>;
        })}
      </div>
    </div>
  );
};
