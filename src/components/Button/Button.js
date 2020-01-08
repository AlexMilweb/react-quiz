import React from 'react';
import { Button } from './Button.styled';

export default ({ children, onClick, className, disabled, type, ...props }) => (
  <Button onClick={onClick} className={className} disabled={disabled} type={type} {...props}>
    {children}
  </Button>
);
