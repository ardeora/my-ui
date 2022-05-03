import React, { FC, HTMLAttributes, useContext } from 'react';

import { css, cx } from '@emotion/css';
import { useTheme } from '../../../hooks';
import { TableContext } from './Context/TableContext';
import { ThemeState, ThemeColors, getThemeValue as themed } from '../../../';

export interface TrProps extends HTMLAttributes<HTMLTableRowElement> {}

export const Tr: FC<TrProps> = ({ children, className, ...props }) => {
  const { variant, size, color } = useContext(TableContext);
  const theme = useTheme();
  const styles = getStyles(theme, color);

  return (
    <tr {...props} className={cx( variant === 'unstyled' ? null : [styles.tr, styles[size], styles[variant]], className)}>
      {children}
    </tr>
  );
};

const getStyles = (theme: ThemeState, color: ThemeColors) => {

  const { spacing, colors, font, alpha, border } = theme.config;
  const { size } = font;
  const { radius } = border;

  return {
    tr: css`
      background-color: ${themed(colors[color][50], colors[color][500])};
      border-bottom: 1px solid ${themed(colors[color][200], colors[color][600])};
      tbody &:last-child {
        border-bottom: none;
      }
      thead & {
        background-color: ${themed(colors[color][100], colors[color][600])};
        border-bottom: 1px solid ${themed(colors[color][200], colors[color][700])};
      }
    `,
    sm: css`
      height: ${spacing[8]};
      font-size: ${size.sm};
      thead &:first-child th:first-child {
        border-top-left-radius: ${radius.md};
      }
      thead &:first-child th:last-child {
        border-top-right-radius: ${radius.md};
      }
      tbody &:last-child td:first-child {
        border-bottom-left-radius: ${radius.md};
      }
      tbody &:last-child td:last-child {
        border-bottom-right-radius: ${radius.md};
      }
    `,
    md: css`
      height: ${spacing[10]};
      font-size: ${size.sm};
      thead &:first-child th:first-child {
        border-top-left-radius: ${radius.md};
      }
      thead &:first-child th:last-child {
        border-top-right-radius: ${radius.md};
      }
      tbody &:last-child td:first-child {
        border-bottom-left-radius: ${radius.md};
      }
      tbody &:last-child td:last-child {
        border-bottom-right-radius: ${radius.md};
      }
    `,
    lg: css`
      height: ${spacing[14]};
      font-size: ${size.md};
      thead &:first-child th:first-child {
        border-top-left-radius: ${radius.md};
      }
      thead &:first-child th:last-child {
        border-top-right-radius: ${radius.md};
      }
      tbody &:last-child td:first-child {
        border-bottom-left-radius: ${radius.md};
      }
      tbody &:last-child td:last-child {
        border-bottom-right-radius: ${radius.md};
      }
    `,
    simple: css``,
    striped: css`
      &:nth-child(even) {
        background-color: ${themed(colors[color][100], colors[color][600])};
      }
    `,
    unstyled: css``
  };
};