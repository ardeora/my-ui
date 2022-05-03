
   
import React, { FC, useContext, ThHTMLAttributes } from 'react';
import { css, cx } from '@emotion/css';
import { useTheme } from '../../../hooks';
import { TableContext } from './Context/TableContext';
import { ThemeState, ThemeColors, getThemeValue as themed } from '../../../';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';

export interface ThProps extends ThHTMLAttributes<HTMLTableCellElement> {
  sort?: 'ASC' | 'DESC' | null;
}

export const Th: FC<ThProps> = ({ sort = null, className, children, ...props }) => {
  const { color } = useContext(TableContext);
  const theme = useTheme();
  const styles = getStyles(theme, color);

  return (
    <th {...props} className={cx(styles.th, className)}>
      <div className={styles.thContent} style={props.style}>
        {children}
        {sort == null ? null : sort === 'ASC' ? <HiChevronUp /> : <HiChevronDown />}
      </div>
    </th>
  );
};

const getStyles = (theme: ThemeState, color: ThemeColors) => {
  const { colors } = theme.config;
  return {
    th: css`
      cursor: pointer;
      padding: 4px 16px;
      font-weight: 600;
      & svg {
        width: 1.25rem;
        height: 1.125rem;
      }
    `,
    thContent: css`
      display: flex;
      align-items: center;
      & svg {
        color: ${themed(colors[color][800], colors[color][200])};
      }
    `,
  };
};