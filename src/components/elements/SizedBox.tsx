/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

export const SizedBox: React.FC<
  PropsWithChildren<{
    width?: number | string;
    height?: number | string;
    flex?: number;
  }>
> = ({children, width, height, flex}) => {
  return (
    <View
      style={{
        width: width ?? '100%',
        height: height ?? '100%',
        flex: flex ?? 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </View>
  );
};
