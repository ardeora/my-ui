import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeColors } from '../styles';
import { useTheme } from '../hooks';
import { Table, Thead, Tr, Th, Tbody, Td } from '../components/Table';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { css } from '@emotion/css';

export default {
  title: 'Example/Table',
  component: Table,
  argTypes: {
  },
} as ComponentMeta<typeof Table>;

export const Create: ComponentStory<typeof Table> = (args) => {
  const { theme, config } = useTheme();

  const [sort, setSort] = useState('Name')

  const sortClicked = (sort: string) => {
  }

  const color = args.color as ThemeColors;

  return (
    <div className={css`
      width: 100%;
      max-width: 960px;
      border-radius: 8px;
      ${args.variant !== 'unstyled' ? `box-shadow: 0 10px 15px -3px ${config.colors[color][500]}1a, 0 4px 6px -4px ${config.colors[color][500]}1a;` : ''}
    `}>
    <Table size={args.size} color={args.color} variant={args.variant}>
      <Thead>
        <Tr>
          <Th
            sort={'ASC'}
          >Name</Th>
          <Th>Title</Th>
          <Th>Email</Th>
          <Th>Role</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Lindsay Walton</Td>
          <Td>Front-End Developer</Td>
          <Td>lwalton@iu.edu</Td>
          <Td>Member</Td>
        </Tr>
        <Tr>
          <Td>Courtney Henry</Td>
          <Td>Designer</Td>
          <Td>chenry@iu.edu</Td>
          <Td>Admin</Td>
        </Tr>
        <Tr>
          <Td>Tom Cook</Td>
          <Td>Director, Product Development</Td>
          <Td>tcook@iu.edu</Td>
          <Td>Member</Td>
        </Tr>
        <Tr>
          <Td>Whitney Francis</Td>
          <Td>Copywriter</Td>
          <Td>wfrancis@iu.edu</Td>
          <Td>Admin</Td>
        </Tr>
        <Tr>
          <Td>Leoonard Krasner</Td>
          <Td>Senior Designer</Td>
          <Td>lkrasner@iu.edu</Td>
          <Td>Owner</Td>
        </Tr>
        <Tr>
          <Td>Floyd Miles</Td>
          <Td>Principal Designer</Td>
          <Td>fmiles@iu.edu</Td>
          <Td className={css`
            border-bottom-right-radius: 40px;
          `}>Member</Td>
        </Tr>
      </Tbody>
    </Table>
    </div>
  );
};

Create.args = {
  variant: 'simple',
  size: 'md',
  color: 'blue',
};

