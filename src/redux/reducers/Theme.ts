import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ThemeConfig, ThemeConfigType } from '../../styles/config'
export type ThemeType = 'light' | 'dark' 

export interface ThemeState {
  theme: ThemeType,
  config: ThemeConfigType
}

const initialState: ThemeState = {
  theme: 'light',
  config: ThemeConfig
}

export const themeSlice = createSlice({
  name: 'my-ui/theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload
    },
    darkTheme: (state) => {
      state.theme = 'dark'
    },
    lightTheme: (state) => {
      state.theme = 'light'
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    }
  },
})

// Action creators are generated for each case reducer function
export const { setTheme, darkTheme, lightTheme, toggleTheme} = themeSlice.actions

export default themeSlice.reducer