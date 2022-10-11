import * as React from 'react';

import { ThemeProvider } from 'styled-components/native';

const theme = {
  color: {
    red: 'red',
    green: '#dd6d00',
  },
};
const themeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
export const decorators = [themeDecorator];
