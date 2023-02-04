import React from 'react';
import {View} from 'react-native';
import {IconButton} from './IconButton';

type CustomIconProps = {
  bgColor?: string;
  color?: string;
  icon?: string;
  action?: () => void;
  size?: number;
};

export const CustomIcon: React.FC<CustomIconProps> = ({
  bgColor = '#ECEDF9',
  color = '#2E3A8D',
  icon = 'arrow-ios-forward',
  action,
  size = 30,
}) => {
  const customStyle = {
    height: size,
    width: size,
    backgroundColor: bgColor,
    borderRadius: 5,
    padding: size > 30 ? 10 : 4,
  };
  return (
    <View style={customStyle}>
      <IconButton name={icon} fill={color} onClick={action} animation="shake" />
    </View>
  );
};
