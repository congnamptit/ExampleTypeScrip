import React from 'react';
import {ColorValue, Text, TextInput, View} from 'react-native';

interface TextFieldProps {
  colorText?: ColorValue;
  colorTextValidate?: ColorValue;
  radius?: number;
  width?: number | string;
  isShowText: boolean;
  placeholderText?: string;
  borderWidth?: number;
  height?: number | string;
  padding?: number | string;
  marginLeft?: number | string;
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  placeholderColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  fontSizeValidateText?: number;
  textValidate?: string;
}

export const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const {
    colorText,
    radius,
    width,
    isShowText,
    placeholderText,
    borderWidth,
    height,
    padding,
    marginLeft,
    marginHorizontal,
    marginVertical,
    placeholderColor,
    backgroundColor,
    borderColor,
    onChangeText,
    value,
    fontSizeValidateText,
    colorTextValidate,
    textValidate,
  } = props;

  return (
    <View style={{width: width ?? '100%'}}>
      <View
        style={{
          backgroundColor: backgroundColor ?? 'white',
          borderRadius: radius ?? 0,
          borderWidth: borderWidth ?? 0,
          borderColor: borderColor ?? 'black',
          marginHorizontal: marginHorizontal ?? 0,
          marginVertical: marginVertical ?? 0,
        }}>
        <TextInput
          style={{
            color: colorText ?? 'black',
            height: height ?? 0,
            padding: padding ?? 0,
          }}
          value={value}
          onChangeText={onChangeText ?? undefined}
          secureTextEntry={isShowText ?? false}
          placeholder={placeholderText ?? ''}
          placeholderTextColor={placeholderColor ?? ''}
        />
      </View>
      <Text
        style={{
          color: colorTextValidate,
          fontSize: fontSizeValidateText,
          marginLeft: marginLeft,
        }}>
        {textValidate}
      </Text>
    </View>
  );
};
