import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const ButtonCalculator = ({
  action,
  color = '#2d2d2d',
  isBigButton = false,
  text,
}: ButtonCalculatorProps) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: isBigButton ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

interface ButtonCalculatorProps {
  action: (numberText: string) => void;
  color?: string;
  isBigButton?: boolean;
  text: string;
}
