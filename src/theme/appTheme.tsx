import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  smallResult: {
    color: 'rgba(255,255,255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },

  button: {
    backgroundColor: '#9b9b9b',
    borderRadius: 100,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
  buttonText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '300',
    padding: 10,
    textAlign: 'center',
  },
});
