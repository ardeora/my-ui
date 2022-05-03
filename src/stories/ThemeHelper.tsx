import React, { FC, useEffect } from 'react'
import { useTheme } from '../hooks'
import { setDarkTheme, setLightTheme } from '../funcs'
interface ThemeHelperProps {
  themeContext: string
}

const ThemeHelper:FC<ThemeHelperProps> = ({ 
  themeContext
}) => {

  const theme = useTheme()

  useEffect(() => {
    if (themeContext === 'dark') {
      setDarkTheme()
    } else {
      setLightTheme()
    }
  }, [themeContext])


  return null;
}

export default ThemeHelper