import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonCalculator } from '../components/ButtonCalculator';
import { styles } from '../theme/appTheme';

const initialNumber = '0';

export const CalculatorScreen = () => {
  const [number, setNumber] = useState(initialNumber);
  const [prevNumber, setPrevNumber] = useState(initialNumber);

  const handleClear = () => setNumber(initialNumber);

  const deleteLastEntry = () => {
    let negative = '';
    let tempNumber = number;

    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substring(1);
    }

    if (number.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber(initialNumber);
    }
  };

  const createNumber = (numberText: string) => {
    if (number.includes('.') && numberText === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberText === '.') {
        setNumber(number + numberText);
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const handleToggleSymbol = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{prevNumber}</Text>
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
