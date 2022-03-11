import React from 'react';
import {View} from 'react-native';

const Spacer = props => {
  return (
    <View
      style={[
        props.orientation === 'vertical'
          ? {height: props.size}
          : {width: props.size},
      ]}
    />
  );
};

export default Spacer;
