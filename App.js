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
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Your course goal"
          placeholderTextColor="black"
          ></TextInput>
        <Button title="Add Goal"></Button>
      </View>

      {/* goals list */}
      <View style={styles.bottomView}>
        <Text>List of goals...</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 70
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});
