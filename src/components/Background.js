import React from 'react';
import Svg, {Polygon} from 'react-native-svg';

import {View, StyleSheet} from 'react-native';
import {globalHeight, globalWidth, isIOS} from '../constants/Dimensions';
import Colors from '../constants/Colors';

const Backgroud = () => {
  return (
    <View style={style.container}>
      <Svg
        height={globalHeight() * (isIOS() ? 1 : 1.1)}
        width={globalWidth() * (isIOS() ? 1 : 1.05)}>
        <Polygon
          fill={Colors.blue2}
          points={`0,0 ${globalWidth()},0 ${globalWidth()},${
            globalHeight() / 2.5
          } 0,${globalHeight() / 2.5}`}
        />
        <Polygon
          fill={Colors.blue1}
          points={`0,${globalHeight() * 0.04} ${globalWidth() * 0.5},${
            globalHeight() * 0.19
          } 0,${globalHeight() * 0.36}`}
        />
        <Polygon
          fill={Colors.green}
          points={`${globalWidth()},${globalHeight() * 0.05} ${
            globalWidth() * 0.5
          },${globalHeight() * 0.19} ${globalWidth()},${globalHeight() * 0.4}`}
        />
        <Polygon
          fill={Colors.pink}
          points={`0,${globalHeight() * 0.35} ${globalWidth() * 0.5},${
            globalHeight() * 0.19
          } ${globalWidth()},${globalHeight() * 0.4} 0,${globalHeight() * 0.6}`}
        />
      </Svg>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    position: 'absolute',
    width: globalWidth(),
  },
});
export default Backgroud;
