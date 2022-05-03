import React, { createContext } from "react";
import { SimpleTableVariant, SimpleTableSize } from '../Table';
import { ThemeColors } from '../../../../';

interface TableContextProps {
  variant: SimpleTableVariant;
  size: SimpleTableSize;
  color: ThemeColors;
}

// This context will be used to pass the table styles to all of its children
export const TableContext = createContext<TableContextProps>({
  variant: 'simple',
  size: 'md',
  color: 'slate'
})