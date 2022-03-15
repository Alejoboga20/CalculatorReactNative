import React from 'react';
import { Text, View } from 'react-native';
import { ButtonCalculator } from '../components/ButtonCalculator';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1,500.000</Text>
      <Text style={styles.result}>1,500.000</Text>

      <View style={styles.row}>
        <ButtonCalculator text="C" color="#9b9b9b" />
        <ButtonCalculator text="+/-" color="#9b9b9b" />
        <ButtonCalculator text="del" color="#9b9b9b" />
        <ButtonCalculator text="/" color="#ff9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="7" />
        <ButtonCalculator text="8" />
        <ButtonCalculator text="9" />
        <ButtonCalculator text="X" color="#ff9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="4" />
        <ButtonCalculator text="5" />
        <ButtonCalculator text="5" />
        <ButtonCalculator text="-" color="#ff9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="1" />
        <ButtonCalculator text="2" />
        <ButtonCalculator text="3" />
        <ButtonCalculator text="+" color="#ff9427" />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="0" isBigButton />

        <ButtonCalculator text="." />
        <ButtonCalculator text="=" color="#ff9427" />
      </View>
    </View>
  );
};
