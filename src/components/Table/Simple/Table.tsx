import React, { FC, TableHTMLAttributes } from 'react';
import { css, cx } from '@emotion/css';
import { ThemeState, ThemeColors } from '../../../';
import { TableContext } from './Context/TableContext';
import { useTheme } from '../../../hooks';

export type SimpleTableVariant = 'simple' | 'striped' | 'unstyled';
export type SimpleTableSize = 'sm' | 'md' | 'lg';

export interface SimpleTableProps extends TableHTMLAttributes<HTMLTableElement> {
  variant?: SimpleTableVariant;
  size?: SimpleTableSize;
  color?: ThemeColors;
  children?: React.ReactNode;
}

export const Table:FC<SimpleTableProps> = ({
  variant = 'simple',
  size = 'md',
  color = 'gray',
  children,
  className,
  ...props
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    // Passing the styling context to all of table's descendents
    <TableContext.Provider value={{ variant, size, color }}>
      <table {...props} className={cx(styles.table, className)}>
        {children}
      </table>
    </TableContext.Provider>
  )
}

const getStyles = (theme: ThemeState) => {
  return {
    table: css`
      border-collapse: collapse;
      width: 100%;
    `
  }
}
