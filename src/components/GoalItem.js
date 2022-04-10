import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useContext } from 'react';
import GoalContext from '../context/GoalContext';

function GoalItem (props) {
  const {deleteGoal} = useContext(GoalContext);
  
  const handleDelete = () => {
    deleteGoal(props.goal.id);
  }

  return (
      <View style={styles.goalItem} key={props.goal.id}>
        <Text style={styles.goalText}>{props.goal.text}</Text>

        <View style={styles.deleteContainer}>
          <Pressable 
            android_ripple={{color: '#dddddd'}}
            style={( {pressed} ) => pressed && styles.pressedItem}
            onPress={handleDelete}>
              <Text style={styles.deleteIcon}>X</Text>
          </Pressable>
          </View>
      </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({  
    goalItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 8,
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#f542ce'
    },
    goalText: {
      color: 'white'
    },
    deleteContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      backgroundColor: 'white'
    },
    deleteIcon: {
      color: 'purple'
    },
    pressedItem: {
      opacity: 0.5
    }
  });