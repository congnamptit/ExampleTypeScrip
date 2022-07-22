/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren} from 'react';
import {ColorValue, FlexAlignType, View} from 'react-native';

export const Row: React.FC<
  PropsWithChildren<{
    radius?: number;
    width?: number | string;
    padding?: number | string;
    margin?: number | string;
    marginVertical?: number | string;
    marginHorizontal?: number | string;
    height?: number | string;
    backGroundColor?: ColorValue;
    colorBorder?: ColorValue;
    crossAxits?: FlexAlignType;
    mainAxits?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'space-evenly';
  }>
> = ({
  children,
  radius,
  width,
  padding,
  height,
  backGroundColor,
  colorBorder,
  margin,
  marginHorizontal,
  marginVertical,
  crossAxits,
  mainAxits,
}) => {
  return (
    <View
      style={{
        borderRadius: radius! ?? 0,
        width: width ?? '100%',
        height: height ?? 10,
        padding: padding ?? 0,
        margin: margin ?? 0,
        marginHorizontal: marginHorizontal ?? 0,
        marginVertical: marginVertical ?? 0,
        borderColor: colorBorder ?? 'black',
        backgroundColor: backGroundColor ?? 'white',
        flexDirection: 'row',
        alignItems: crossAxits ?? 'center',
        justifyContent: mainAxits ?? 'center',
      }}>
      {children}
    </View>
  );
};
