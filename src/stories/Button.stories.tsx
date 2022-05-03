import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeColors } from '../styles';
import { Button, ButtonVariant, ButtonSize } from '../components/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Button>;

export const Create: ComponentStory<typeof Button> = (args) => {
  const codeString = `import { Button } from 'adeora/my-ui';\n

const Example = () => {
  return (
    <Button variant="${args.variant}" color="${args.color}" size="${args.size}">
      ${args.children}
    </Button>
  );
}`;
  return (
    <div>
        <Button color={args.color} variant={args.variant} size={args.size} >
          {args.children}
        </Button>

        <div style={{position:'relative', border: '2px solid #94a3b8', borderRadius: '4px', marginTop: '24px'}}>
          <SyntaxHighlighter language="javascript" style={nightOwl}>
            {codeString}
          </SyntaxHighlighter>
        </div>

    </div>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Create.args = {
  variant: 'solid',
  size: 'md',
  color: 'blue',
  children: 'Button'
};

Create.argTypes = {
  children: { name: 'text' },
};

export const Variants: ComponentStory<typeof Button> = (args) => {
  const variants:ButtonVariant[] = ['solid', 'outline', 'ghost'];
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  console.log('ARGS', args);
  return (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        justifyContent: 'flex-start',
      }}>
      {variants.map((variant) => (
        <Button color={args.color} variant={variant} size={args.size} style={{margin: '0px'}}>
          {capitalize(args.children ? args.children : '')}
        </Button>
      ))}
    </div>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Variants.args = {
  size: 'md',
  color: 'blue',
  children: 'Button'
};

Variants.argTypes = {
  variant: { control: { disable: true } },
  children: { name: 'text' },
}

export const Sizes: ComponentStory<typeof Button> = (args) => {
  const sizes:ButtonSize[] = ['sm', 'md', 'lg'];
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        justifyContent: 'flex-start',
      }}>
      {sizes.map((size) => (
        <Button color={args.color} size={size} variant={args.variant} style={{margin: '0px'}}>
          {capitalize(args.children ? args.children : '')}
        </Button>
      ))}
    </div>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sizes.args = {
  variant: 'solid',
  color: 'blue',
  children: 'Button'
};

Sizes.argTypes = {
  size: { control: { disable: true } },
  children: { name: 'text' },
}

export const Colors: ComponentStory<typeof Button> = (args) => {
  const colors:ThemeColors[] = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        justifyContent: 'flex-start',

      }}>
      {colors.map((color) => (
        <Button color={color} variant={args.variant} size={args.size} style={{margin: '0px'}}>
          {capitalize(color)}
        </Button>
      ))}
    </div>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Colors.args = {
  variant: 'solid',
  size: 'md',
};

Colors.argTypes = {
  children: { control: { disable: true } },
  color: { control: { disable: true } },
}


