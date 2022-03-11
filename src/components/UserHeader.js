import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {globalHeight, globalWidth, isTablet} from '../constants/Dimensions';
const UserHeader = () => {
  return (
    <View style={style.container}>
      <Image
        source={require('../assets/profile_image.png')}
        style={style.userProfileImage}
      />
      <Text style={style.userProfileName}>Lottie Curtis</Text>
      <View style={style.chip}>
        <Text style={style.chipText}>You have 3 products</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    height: isTablet() ? globalHeight() * 0.18 : globalHeight() * 0.159,
    justifyContent: 'space-between',
  },
  userProfileImage: {
    borderRadius: 100,
    height: isTablet() ? globalWidth() * 0.145 : globalWidth() * 0.145,
    width: isTablet() ? globalWidth() * 0.145 : globalWidth() * 0.145,
  },
  userProfileName: {
    color: '#fff',
    fontSize: isTablet() ? 35 : 18,
    fontWeight: 'bold',
  },
  chip: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  chipText: {fontSize: isTablet() ? 20 : 14},
});

export default UserHeader;
