import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useContext } from 'react';
import GoalContext from '../context/GoalContext';

function GoalItem (props) {
  const {deleteGoal} = useContext(GoalContext);
  
  const handleDelete = () => {
    deleteGoal(props.item);
  }

  return (
      <View style={styles.goalItem} key={props.item.key}>
        <Text style={styles.goalText}>{props.item.text}</Text>

        <Pressable onPress={handleDelete}>
          <View style={styles.deleteContainer}>
            <Text style={styles.deleteIcon}>X</Text>
          </View>
        </Pressable>
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
      color: 'black'
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
    }
  });