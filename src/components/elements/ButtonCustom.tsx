import React from 'react';
import {ColorValue, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native';

interface ButtonProps {
  radius?: number;
  padding?: number;
  width?: number | string;
  margin?: number;
  marginVertical?: number | string | undefined;
  marginHorizontal?: number | string | undefined;
  height?: number;
  backGroundColor?: ColorValue;
  onPress?: () => void;
  textButton: string;
  colorText?: ColorValue;
  colorBorder?: ColorValue;
  fontWeight?: any;
  flexDirection?: any;
  crossAxits?: any;
  mainAxits?: any;
  borderWidth?: number;
}

export const ButtonCustom: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    radius,
    width,
    padding,
    height,
    backGroundColor,
    textButton,
    colorText,
    onPress,
    colorBorder,
    margin,
    marginHorizontal,
    marginVertical,
    fontWeight,
    crossAxits,
    mainAxits,
    borderWidth,
  } = props;
  return (
    <View style={{width: width ?? '100%'}}>
      <TouchableOpacity
        style={{
          borderRadius: radius! ?? 0,
          margin: margin ?? 0,
          marginHorizontal: marginHorizontal ?? 0,
          marginVertical: marginVertical ?? 0,
          backgroundColor: backGroundColor ?? 'blue',
          borderColor: colorBorder ?? 'black',
          height: height ?? 10,
          padding: padding ?? 0,
          alignItems: crossAxits ?? 'center',
          justifyContent: mainAxits ?? 'center',
          borderWidth: borderWidth ?? 0,
        }}
        onPress={onPress}>
        <Text
          style={{
            color: colorText ?? 'white',
            fontWeight: fontWeight ?? '100',
          }}>
          {textButton}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
