/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ColorValue, View} from 'react-native';

interface DividerProps {
  height?: number | string;
  width?: number | string;
  colorDIV?: ColorValue;
}

export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  const {height, colorDIV, width} = props;
  return (
    <View
      style={{
        width: width ?? '100%',
        height: height ?? 10,
        backgroundColor: colorDIV ?? 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
      }}
    />
  );
};
