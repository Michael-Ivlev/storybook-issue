import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const TestStory = (props) => {
  return (
    <View>
      <StyledText>asdasdasdasd</StyledText>
    </View>
  );
};

const StyledText = styled.Text`
  background-color: ${({ theme }) => theme.color.red};
`;

export default TestStory;
