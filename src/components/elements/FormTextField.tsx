/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {ColorValue, View, Text} from 'react-native';
import {TextField} from './TextField';

interface FormProps {
  width?: number | string;
  textName: string;
  marginLeft?: number | string;
  color?: ColorValue;
  isShowText: boolean;
  value?: string;
  textValidate?: string;
  onChangeText?: (text: string) => void;
}

export const FormTextField: React.FC<FormProps> = (props: FormProps) => {
  const {
    textName,
    width,
    marginLeft,
    color,
    onChangeText,
    value,
    textValidate,
    isShowText,
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
        radius={30}
        isShowText={isShowText}
        placeholderText="Password"
        borderWidth={1}
        height={40}
        padding={10}
        marginHorizontal={20}
        marginVertical={5}
        marginLeft={30}
        placeholderColor={''}
        backgroundColor={'azure'}
        borderColor={'cyan'}
        value={value}
        textValidate={textValidate}
        onChangeText={onChangeText}
      />
    </View>
  );
};
