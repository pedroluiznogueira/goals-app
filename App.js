import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [goalText, setGoalText] = useState('');

  const goalInputHandler = (goalText) => {
    setGoalText(goalText);
  };

  const addGoalHandler = () => {
    console.log(goalText);
  };

  return (
    <View style={styles.appContainer}>

      {/* input and button */}
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          ></TextInput>
        <Button 
          color="pink" 
          title="Add Goal"
          onPress={addGoalHandler}
          ></Button>
      </View>

      {/* goals list */}
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 40
  },

  inputContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 24
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },

  goalsContainer: {
    flex: 0.8,
    flexDirection: 'row'
  },
});