import React, { FC, useEffect } from 'react'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import { ThemeController } from './ThemeController'
import { ThemeType } from '../../redux/reducers/Theme'

interface UIProviderProps {
  children: React.ReactNode
}

/* This is the context provider for the global UI state
// It is used to provide the UI state to all components
// that need it.
// @param {GNUIProviderProps} props
// @return {React.ReactNode}
*/
export const GNUIProvider: FC<UIProviderProps> = (props) => {
  return (
    <Provider store={store}>
      <ThemeController {...props} />
    </Provider>
  )
}
