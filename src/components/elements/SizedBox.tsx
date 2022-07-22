import React from 'react';
import {View} from 'react-native';

interface SBProps {
  width?: number | string;
  height?: number | string;
}

export const SizedBox: React.FC<SBProps> = (props: SBProps) => {
  const {width, height} = props;
  return (
    <View
      style={{
        width: width ?? '100%',
        height: height ?? '100%',
      }}
    />
  );
};
