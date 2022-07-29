/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {ColorValue, View, Text} from 'react-native';
import {TextField} from './TextField';

interface FormProps {
  width?: number | string;
  radius?: number;
  textName: string;
  marginLeft?: number | string;
  color?: ColorValue;
  isShowText: boolean;
  value?: string;
  textValidate?: string;
  onChangeText?: (text: string) => void;
  borderColor?: string | undefined;
  backgroundColor: string | undefined;
}

export const FormTextField: React.FC<FormProps> = (props: FormProps) => {
  const {
    textName,
    width,
    radius,
    marginLeft,
    color,
    onChangeText,
    value,
    textValidate,
    isShowText,
    borderColor,
    backgroundColor,
  } = props;

  return (
    <View
      style={{
        width: width ?? '100%',
      }}>
      <Text
        style={{
          marginLeft: marginLeft,
          color: color ?? 'black',
        }}>
        {textName}
      </Text>
      <TextField
        colorText={'red'}
        radius={radius ?? 0}
        isShowText={isShowText}
        placeholderText="Password"
        borderWidth={1}
        height={40}
        padding={10}
        // marginHorizontal={20}
        marginVertical={5}
        marginLeft={30}
        placeholderColor={''}
        backgroundColor={backgroundColor ?? 'azure'}
        borderColor={borderColor ?? 'cyan'}
        value={value}
        textValidate={textValidate}
        onChangeText={onChangeText}
      />
    </View>
  );
};
