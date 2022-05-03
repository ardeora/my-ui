import { UIProvider } from '../src/components';
import ThemeHelper from '../src/stories/ThemeHelper'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  theme: {
    default: 'light',
    selector: 'body',
    onChange: (theme) => {
      console.log('THEME CHANGED', theme);

    },
    themes: [
      {
        id: 'light',
        title: 'Light',
        class: 'light',
        color: '#fff',
      },
      {
        id: 'dark',
        title: 'Dark',
        class: 'dark',
        color: '#000',
      },
    ],
  }
}

export const decorators = [
  (Story, context) => {
    console.log(context)
  return   (
    <UIProvider>
      <ThemeHelper themeContext={context.globals.theme}/>
      <Story />
    </UIProvider>
  )},
];