import React, { FC, HTMLAttributes } from 'react';

export interface TbodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

export const Tbody: FC<TbodyProps> = ({ children, ...props }) => {
  return <tbody {...props}>{children}</tbody>;
};