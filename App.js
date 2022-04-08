import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Another text</Text>
      <Button title="Tap me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'purple',
    margin: 100,
    borderWidth: 1,
    borderColor: 'red',
    padding: 10
  }
});
