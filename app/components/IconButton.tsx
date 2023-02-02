import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Icon} from '@ui-kitten/components';

type IconButtonProps = {
  name: string; // name of the icon
  onClick?: () => void;
  [x: string]: any;
};

export const IconButton: React.FC<IconButtonProps> = ({
  name,
  onClick,
  ...otherProps
}) => {
  return (
    <>
      {onClick ? (
        <TouchableWithoutFeedback onPress={onClick}>
          <Icon name={name} {...otherProps} />
        </TouchableWithoutFeedback>
      ) : (
        <Icon name={name} {...otherProps} />
      )}
    </>
  );
};
