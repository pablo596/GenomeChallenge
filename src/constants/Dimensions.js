import {Dimensions, Platform} from 'react-native';
const {height, width} = Dimensions.get('window');

export const globalWidth = () => width;
export const globalHeight = () => height;
export const isTablet = () => width < 1300 && width >= 650;

export const isIOS = () => Platform.OS === 'ios';
export const isAndroid = () => Platform.OS === 'android';
