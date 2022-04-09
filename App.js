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
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (goalText) => {
    setGoalText(goalText);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, goalText]);
  };

  return (
    <View style={styles.appContainer}>

      {/* input and button */}
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Your course goal"
          placeholderTextColor='#ffffff'
          color='#ffffff'
          onChangeText={goalInputHandler}
          ></TextInput>
        <Button 
          color="#f542ce" 
          title="Add Goal"
          onPress={addGoalHandler}
          ></Button>
      </View>

      {/* goals list */}
      <View style={styles.goalsContainer}>
        {goals.map((goal, index) => (
          <View     
            style={styles.goalItem}
            key={index}>

            <Text
              style={styles.goalText}
            >{goal}</Text> 

          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5e0acc',
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
    flex: 0.8
  },

  goalItem: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#f542ce'
  },
  goalText: {
    color: 'white'
  }
});