import React from 'react';
import {Text} from 'react-native';

const Label = ({children, style, textProps}) => {
  return (
    <Text style={{fontFamily: 'Roboto-Regular', ...style}} {...textProps}>
      {children}
    </Text>
  );
};

export default Label;
