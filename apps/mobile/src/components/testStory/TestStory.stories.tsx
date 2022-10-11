import { storiesOf } from '@storybook/react-native';
import React from 'react';
import TestStory from './TestStory';
import { ThemeProvider } from 'styled-components/native';

const theme = {
  color: {
    red: 'red',
    green: '#dd6d00',
  },
};

// const props = {};

storiesOf('TestStory', module)
  // .addDecorator((storyFn) => (
  //   <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  // ))
  .add('Primary', () => <TestStory />);

// export default {
//   title: 'TestStory',
//   component: TestStory,
// };
// export const Text = () => <TestStory />;
