import { useRef, useState } from 'react';

const initialNumber = '0';

enum Operators {
  sum,
  diff,
  times,
  division,
}

export const useCalculator = () => {
  const [number, setNumber] = useState(initialNumber);
  const [prevNumber, setPrevNumber] = useState(initialNumber);
  const lastOperation = useRef<Operators>();

  const handleClear = () => {
    setNumber(initialNumber);
    setPrevNumber(initialNumber);
  };

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

  const changeNumByPrev = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber(initialNumber);
  };

  const handleDivision = () => {
    changeNumByPrev();
    lastOperation.current = Operators.division;
  };

  const handleTimes = () => {
    changeNumByPrev();
    lastOperation.current = Operators.times;
  };

  const handleDiff = () => {
    changeNumByPrev();
    lastOperation.current = Operators.diff;
  };

  const handleSum = () => {
    changeNumByPrev();
    lastOperation.current = Operators.sum;
  };

  const calculate = () => {
    const firstNumber = Number(number);
    const secondNumber = Number(prevNumber);

    switch (lastOperation.current) {
      case Operators.sum:
        setNumber(`${firstNumber + secondNumber}`);

        break;
      case Operators.diff:
        setNumber(`${secondNumber - firstNumber}`);
        break;
      case Operators.times:
        setNumber(`${firstNumber * secondNumber}`);
        break;
      case Operators.division:
        setNumber(`${secondNumber / firstNumber}`);
        break;

      default:
        break;
    }

    setPrevNumber(initialNumber);
  };

  return {
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
  };
};
