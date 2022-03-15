import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const ButtonCalculator = ({
  color = '#2d2d2d',
  text,
}: ButtonCalculatorProps) => {
  return (
    <View style={{ ...styles.button, backgroundColor: color }}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};

interface ButtonCalculatorProps {
  color?: string;
  text: string;
}
