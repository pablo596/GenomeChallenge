import React, {useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {globalWidth} from '../constants/Dimensions';
import Card from './Card';
import Colors from '../constants/Colors';

const Carousel = ({cards}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={style.container}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        data={cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.contentContainerStyle}
        decelerationRate={0}
        snapToInterval={globalWidth() * 0.7}
        scrollEventThrottle={32}
        keyExtractor={card => card.id}
        renderItem={({item, index}) => {
          return (
            <Card
              key={index}
              card={item}
              index={index}
              scrollX={scrollX}
              count={cards.length}
            />
          );
        }}
      />
      <View style={style.dotsContainer}>
        {cards.map((dot, i) => {
          const inputRange = [
            (i - 1) * globalWidth() * 0.7,
            i * globalWidth() * 0.7,
            (i + 1) * globalWidth() * 0.7,
          ];
          const outputRange = [0, 1, 0];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange,
          });
          return (
            <View key={`dot_${i}`}>
              <Animated.View style={[style.dot]} />
              <Animated.View style={[style.dot, style.active, {opacity}]} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainerStyle: {
    paddingHorizontal: (globalWidth() - globalWidth() * 0.7) / 2,
    paddingTop: 170,
  },
  viewItem: {
    width: globalWidth() * 0.7,
  },
  animatedView: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 34,
    marginHorizontal: 10,
    padding: 10,
  },
  dotsContainer: {
    alignItems: 'center',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    left: globalWidth() * 0.45,
    position: 'absolute',
    right: globalWidth() * 0.45,
  },
  dot: {
    backgroundColor: Colors.grey,
    borderRadius: 100,
    height: 8,
    marginHorizontal: 9,
    width: 8,
  },
  active: {
    backgroundColor: Colors.blue1,
    position: 'absolute',
  },
});
export default Carousel;
