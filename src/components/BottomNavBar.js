import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {globalWidth, isTablet} from '../constants/Dimensions';

const ButtonIcon = ({button, isActive}) => {
  const {label, icon, action} = button;
  return (
    <TouchableOpacity onPress={action}>
      <View style={style.iconTextButton}>
        <SvgXml
          width={globalWidth() * 0.04}
          height={globalWidth() * 0.04}
          fill={isActive ? '#000' : '#A0A9B8'}
          xml={icon}
        />
        <Text style={[style.buttonLabel, isActive && style.activeButton]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const BottomNavBar = ({buttons, isActive}) => {
  return (
    <View style={style.bottomBarContainer}>
      {buttons.map((button, i) => {
        return (
          <ButtonIcon
            key={`${button.label}_${i}`}
            button={button}
            isActive={i === isActive - 1}
          />
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  bottomBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: globalWidth(),
    backgroundColor: '#fff',
    paddingTop: 20,
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -12,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10.0,

    elevation: 10,
  },
  iconTextButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    marginTop: 10,
    fontSize: isTablet() ? 20 : 12,
    color: '#A0A9B8',
  },
  activeButton: {
    color: '#000',
  },
});

export default BottomNavBar;
