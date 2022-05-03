import { store } from '../redux/store';

export const setLightTheme = () => {
  store.dispatch({
    type: 'my-ui/theme/lightTheme',
  });
}

export const setDarkTheme = () => {
  store.dispatch({
    type: 'my-ui/theme/darkTheme',
  });
}

export const toggleTheme = () => {
  store.dispatch({
    type: 'my-ui/theme/toggleTheme',
  });
}