import React, { FC, ButtonHTMLAttributes, Children } from 'react'

import { useTheme } from '../../hooks';
import { ThemeState, ThemeColors, getThemeValue as themed } from '../../';
import { css, cx } from '@emotion/css'

export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ThemeColors;
  children?: string; 
}

export const Button:FC<ButtonProps> = ({
  variant = 'solid',
  size = 'md',
  color = 'blue',
  children,
  className,
  ...props
}) => {

  const theme = useTheme();
  const styles = getStyles(theme, color);

  return (
    <button {...props} className={cx(styles.common, styles[size], styles[variant], className)}>
      {children}
    </button>
  )
}

const getStyles = (themeState: ThemeState, color: ThemeColors) => {
  const { colors, font, border, spacing, alpha } = themeState.config;
  const { size, lineHeight, weight } = font;
  const { radius } = border;

  return {
    common: css`
      border: none;
      cursor: pointer;
      font-weight: ${weight.medium};
    `,
    sm: css`
      font-size: ${size.sm};
      line-height: ${lineHeight.sm};
      border-radius: ${radius.sm};
      height: ${spacing[8]};
      padding: 0 ${spacing[3]};
    `,
    md: css`
      font-size: ${size.md};
      line-height: ${lineHeight.md};
      border-radius: ${radius.sm};
      height: ${spacing[10]};
      padding: 0 ${spacing[4]};
    `,
    lg: css`
      font-size: ${size.lg};
      line-height: ${lineHeight.lg};
      border-radius: ${radius.md};
      height: ${spacing[12]};
      padding: 0 ${spacing[6]};
    `,
    solid: css`
      background-color: ${themed(colors[color]['300'], colors[color]['600'])};
      color: ${themed(colors[color]['900'], colors[color]['50'])};
      &:hover {
        background-color: ${themed(colors[color]['400'], colors[color]['700'])}${alpha['90']};
      }
      &:focus {
        outline: ${themed(colors[color]['400'], colors[color]['500'])} solid 2px;
        outline-offset: 2px;
      }
    `,
    outline: css`
      background-color: transparent;
      border: ${themed(colors[color]['500'], colors[color]['400'])} solid 2px;
      color: ${themed(colors[color]['500'], colors[color]['400'])};
      &:hover {
        background-color: ${themed(colors[color]['300'], colors[color]['300'])}${alpha['20']};
      }
      &:focus {
        outline: ${themed(colors[color]['400'], colors[color]['500'])}${alpha['50']} solid 2px;
        outline-offset: 1px;
      }
    `,
    ghost: css`
      background-color: transparent;
      color: ${themed(colors[color]['500'], colors[color]['400'])};
      &:hover {
        background-color: ${themed(colors[color]['300'], colors[color]['300'])}${alpha['20']};
      }
      &:focus {
        outline: ${themed(colors[color]['400'], colors[color]['500'])}${alpha['50']} solid 2px;
        outline-offset: 1px;
      }
    `
  }
}