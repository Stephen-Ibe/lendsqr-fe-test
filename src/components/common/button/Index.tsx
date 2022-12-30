import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick(): void;
};

const Button = ({ children, onClick }: Props) => (
  <button type='button' onClick={onClick}>
    {children}
  </button>
);

export default Button;
