import React, { FC, HTMLAttributes } from 'react';

export interface TheadProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export const Thead: FC<TheadProps> = ({ children, ...props }) => {
  return <thead {...props}>{children}</thead>;
};