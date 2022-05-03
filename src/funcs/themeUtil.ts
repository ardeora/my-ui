import { store } from '../redux/store';

export const getThemeValue = <T, H>(light: T, dark: H) => {
  const { theme } = store.getState().theme;
  return theme === 'light' ? light : dark;
}