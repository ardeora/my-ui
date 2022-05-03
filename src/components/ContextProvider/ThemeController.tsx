import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useColorScheme } from '../../hooks'
import { darkTheme, lightTheme, ThemeState } from '../../redux/reducers/Theme'
import { globalStyles } from '../../styles'
import { Global, css, jsx } from '@emotion/react'
import { RootState } from '../../redux/store'

interface ThemeControllerProps {
  children: React.ReactNode
}

export const ThemeController:FC<ThemeControllerProps> = ({children}) => {
  const { scheme } = useColorScheme();
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);
  const styles = getThemeModeStyles(theme)
  useEffect(() => {
    globalStyles();
  }, []);

  // Change the theme when the color scheme changes
  useEffect(() => {
    // If the system theme is not selected then
    if(scheme === 'dark') {
      dispatch(darkTheme());
    } else {
      dispatch(lightTheme());
    }
  }, [scheme]);

  return (
    <>
      <Global styles={styles[theme.theme]} />
      {children}
    </>
  )
}

const getThemeModeStyles = (themeState: ThemeState) => {
  const {config} = themeState;
  const { colors } = config;
  return {
    light: {
      'body': {
        backgroundColor: colors.gray[300],
        color: colors.slate[900],
      },
    },
    dark: {
      'body': { 
        backgroundColor: colors.slate[900],
        color: colors.slate[50],
      },
    }
  }
}