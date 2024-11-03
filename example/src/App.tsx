import { StyleSheet, View, Text } from 'react-native';
import { generateMnemonic } from 'react-native-chia-wallet-sdk';

export default function App() {
  console.log(generateMnemonic(24));
  return (
    <View style={styles.container}>
      <Text>{generateMnemonic(24)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
