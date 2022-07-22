/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ColorValue, View} from 'react-native';
import {screenWidth} from '../../constants/Device';

interface DividerProps {
  indent?: number;
  endIndent?: number;
  height?: number | string;
  colorDIV?: ColorValue;
}

export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  const {indent, endIndent, height, colorDIV} = props;
  return (
    <View
      style={{
        width: screenWidth - indent! - endIndent!,
        height: height ?? 10,
        backgroundColor: colorDIV ?? 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};
