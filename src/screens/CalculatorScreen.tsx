import React from 'react';
import { Text, View } from 'react-native';
import { ButtonCalculator } from '../components/ButtonCalculator';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {
  const {
    calculate,
    createNumber,
    deleteLastEntry,
    handleClear,
    handleDiff,
    handleDivision,
    handleSum,
    handleTimes,
    handleToggleSymbol,
    number,
    prevNumber,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.smallResult}>{prevNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalculator text="C" color="#9b9b9b" action={handleClear} />
        <ButtonCalculator
          text="+/-"
          color="#9b9b9b"
          action={handleToggleSymbol}
        />
        <ButtonCalculator text="del" color="#9b9b9b" action={deleteLastEntry} />
        <ButtonCalculator text="/" color="#ff9427" action={handleDivision} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="7" action={createNumber} />
        <ButtonCalculator text="8" action={createNumber} />
        <ButtonCalculator text="9" action={createNumber} />
        <ButtonCalculator text="X" color="#ff9427" action={handleTimes} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="4" action={createNumber} />
        <ButtonCalculator text="5" action={createNumber} />
        <ButtonCalculator text="5" action={createNumber} />
        <ButtonCalculator text="-" color="#ff9427" action={handleDiff} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="1" action={createNumber} />
        <ButtonCalculator text="2" action={createNumber} />
        <ButtonCalculator text="3" action={createNumber} />
        <ButtonCalculator text="+" color="#ff9427" action={handleSum} />
      </View>

      <View style={styles.row}>
        <ButtonCalculator text="0" action={createNumber} />

        <ButtonCalculator text="." action={createNumber} />
        <ButtonCalculator text="=" color="#ff9427" action={calculate} />
      </View>
    </View>
  );
};
