import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {globalHeight, globalWidth} from '../constants/Dimensions';
const ButtonBottomCard = ({label, action}) => {
  return (
    <TouchableOpacity style={style.cardBottomButtonContainer} onPress={action}>
      <View style={style.cardBottomButton}>
        <Text style={style.cardBottomButtonLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  cardBottomButtonContainer: {
    bottom: globalHeight() * 0.04,
    position: 'absolute',
  },
  cardBottomButton: {
    alignItems: 'center',
    backgroundColor: '#303371',
    borderRadius: 19,
    height: globalHeight() * 0.0465,
    justifyContent: 'center',
    width: globalWidth() * 0.265,
  },
  cardBottomButtonLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default ButtonBottomCard;
