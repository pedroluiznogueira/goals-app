import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput
} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* input and button */}
      <View>
        <TextInput placeholder="Your course goal"></TextInput>
        <Button title="Add Goal"></Button>
      </View>

      {/* goals list */}
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'grey',
    padding: 70
  }
});
