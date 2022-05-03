import React, { FC, TdHTMLAttributes } from 'react';
import { css, cx } from '@emotion/css';

export interface TdProps extends TdHTMLAttributes<HTMLTableCellElement> {}

export const Td: FC<TdProps> = ({ children, className, ...props }) => {
  const styles = getStyles();

  return (
    <td {...props} className={cx(styles.td, className)}>
      {children}
    </td>
  );
};

const getStyles = () => {
  return {
    td: css`
      word-wrap: break-word!;
      white-space: nowrap;
      padding: 4px 16px;
    `,
  };
};