import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick(): void;
  buttonStyle?: string;
};

const Button = ({ children, onClick, buttonStyle }: Props) => (
  <button type='button' onClick={onClick} className={buttonStyle}>
    {children}
  </button>
);

export default Button;
