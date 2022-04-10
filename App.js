import {
  StyleSheet,
  Text, 
  View, 
  Button,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';
import { useState } from 'react';
import GoalItem from './src/components/GoalItem';

export default function App() {
  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (goalText) => {
    setGoalText(goalText);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalText, key: Math.random().toString() }
    ]);
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
        <FlatList 
          data={goals}
          renderItem={(goalData) => {
            return <GoalItem item={goalData.item}/>
          }}
          alwaysBounceVertical={false}
          />
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
  }
});