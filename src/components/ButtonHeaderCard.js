import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {globalWidth, isTablet} from '../constants/Dimensions';
const ButtonHeaderCard = ({icon, action}) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style={style.buttonHeader}>
        <SvgXml
          width={globalWidth() * 0.06}
          height={globalWidth() * 0.06}
          xml={icon}
        />
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  buttonHeader: {
    alignItems: 'center',
    backgroundColor: '#303371',
    borderRadius: 100,
    height: isTablet() ? globalWidth() * 0.15 : globalWidth() * 0.15,
    justifyContent: 'center',
    width: isTablet() ? globalWidth() * 0.15 : globalWidth() * 0.15,
  },
});
export default ButtonHeaderCard;
