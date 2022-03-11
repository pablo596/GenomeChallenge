import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {globalHeight, globalWidth, isTablet} from '../constants/Dimensions';
import ButtonBottomCard from './ButtonBottomCard';
import ButtonHeaderCard from './ButtonHeaderCard';
import Spacer from './Spacer';

const Card = ({card, index, scrollX, count}) => {
  const inputRange = [
    (index - (isTablet() ? 1 : 1)) *
      (isTablet() ? globalWidth() * 0.7 : globalWidth() * 0.7),
    index * (isTablet() ? globalWidth() * 0.7 : globalWidth() * 0.7),
    (index + (isTablet() ? 1 : 1.5)) *
      (isTablet() ? globalWidth() * 0.7 : globalWidth() * 0.7),
  ];

  const scrollY = scrollX.interpolate({
    inputRange,
    outputRange: [0, isTablet() ? -75 : -50, 0],
  });
  return (
    <View>
      <Animated.View style={[{transform: [{translateY: scrollY}]}]}>
        <View style={[style.imageOfHeader, style.cardContainer]}>
          <View style={style.card}>
            {card.imageHeader && (
              <Image style={style.imageHeader} source={card.imageHeader} />
            )}

            <View style={style.cardBody}>
              {card.buttonHeader && (
                <ButtonHeaderCard
                  icon={card?.buttonHeader.icon}
                  action={card?.buttonHeader.action}
                />
              )}
              <Text style={style.cardTitle}>{card?.title}</Text>
              <View>
                {card.description.map((descr, i) => (
                  <Text key={`${descr}-${i}`} style={style.cardDescription}>
                    {descr}
                  </Text>
                ))}
              </View>
              {!card.buttonHeader && (
                <Spacer orientation="vertical" size={globalHeight() * 0.06} />
              )}
            </View>
            {card.button && (
              <ButtonBottomCard
                action={card.button.action}
                label={card.button.label}
              />
            )}
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const style = StyleSheet.create({
  imageOfHeader: {
    borderRadius: 24,
    height: globalWidth() * 0.7 * 1.2,
    resizeMode: 'cover',
    width: globalWidth() * 0.6,
  },
  cardContainer: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    elevation: 100,
    marginHorizontal: globalWidth() * 0.05,
    marginTop: isTablet() ? globalHeight() * 0.05 : 0,
    shadowColor: '#254174',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: globalWidth() * 0.05,
    height: isTablet() ? globalHeight() * 0.5 : globalHeight() * 0.4,
    width: isTablet() ? globalWidth() * 0.6 : globalWidth() * 0.6,
  },
  imageHeader: {
    height: isTablet() ? globalHeight() * 0.225 : globalHeight() * 0.2,
    position: 'absolute',
    top: isTablet() ? globalHeight() * -0.12 : globalHeight() * -0.11,
    width: isTablet() ? globalWidth() * 0.5 : globalWidth() * 0.6,
  },

  cardBody: {
    alignItems: 'center',
    flexDirection: 'column',
    height: isTablet() ? globalHeight() * 0.35 : globalHeight() * 0.245,
    justifyContent: 'space-between',
    marginTop: isTablet() ? globalHeight() * 0.1 : globalHeight() * 0.08,
    width: globalWidth() * 0.48,
  },
  cardTitle: {
    color: '#4E5B76',
    fontSize: isTablet() ? globalHeight() * 0.043 : globalHeight() * 0.032,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardDescription: {
    color: '#A0A9B8',
    fontSize: isTablet() ? globalHeight() * 0.023 : globalHeight() * 0.0175,
    marginVertical: isTablet()
      ? globalHeight() * 0.00325
      : globalHeight() * 0.00325,
    textAlign: 'center',
  },
});

export default Card;
