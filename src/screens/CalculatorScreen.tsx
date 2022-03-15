import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonCalculator } from '../components/ButtonCalculator';
import { styles } from '../theme/appTheme';

const initialNumber = '0';

export const CalculatorScreen = () => {
  const [number, setNumber] = useState(initialNumber);
  const [prevNumber, setPrevNumber] = useState(initialNumber);

  const handleClear = () => setNumber(initialNumber);

  const createNumber = (numberText: string) => {
    setNumber(number + numberText);
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{prevNumber}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalculator text="C" color="#9b9b9b" action={handleClear} />
        <ButtonCalculator text="+/-" color="#9b9b9b" action={handleClear} />
        <ButtonCalculator text="del" color="#9b9b9b" action={handleClear} />
        <ButtonCalculator text="/" color="#ff9427" action={handleClear} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="7" action={createNumber} />
        <ButtonCalculator text="8" action={createNumber} />
        <ButtonCalculator text="9" action={createNumber} />
        <ButtonCalculator text="X" color="#ff9427" action={handleClear} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="4" action={createNumber} />
        <ButtonCalculator text="5" action={createNumber} />
        <ButtonCalculator text="5" action={createNumber} />
        <ButtonCalculator text="-" color="#ff9427" action={handleClear} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="1" action={createNumber} />
        <ButtonCalculator text="2" action={createNumber} />
        <ButtonCalculator text="3" action={createNumber} />
        <ButtonCalculator text="+" color="#ff9427" action={handleClear} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="0" action={createNumber} />

        <ButtonCalculator text="." action={createNumber} />
        <ButtonCalculator text="=" color="#ff9427" action={handleClear} />
      </View>
    </View>
  );
};
