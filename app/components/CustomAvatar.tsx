import React from 'react';
import {Avatar} from '@ui-kitten/components';
import {TouchableOpacity} from 'react-native';
type AvatarProps = {
  url: string | null | undefined;
  customStyle?: any;
  onClick?: () => void;
  [x: string]: any;
};

export const CustomAvatar: React.FC<AvatarProps> = ({
  url,
  customStyle,
  onClick,
  ...otherProps
}) => {
  return (
    <>
      <TouchableOpacity onPress={onClick ? onClick : () => {}}>
        {url ? (
          <Avatar
            source={{uri: url}}
            shape="rounded"
            size="large"
            //defaultSource={IMAGES?.profilePic}
            {...otherProps}
            style={customStyle}
          />
        ) : (
          <Avatar
            //source={IMAGES?.profilePic}
            {...otherProps}
            shape="rounded"
            size="large"
            style={customStyle}
          />
        )}
      </TouchableOpacity>
    </>
  );
};
