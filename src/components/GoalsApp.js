import { 
    View,
    StyleSheet
} from 'react-native';
import InputGoal from './InputGoal';
import GoalsList from './GoalsList';

function GoalsApp() {

    return (
        <View style={styles.appContainer}>
            <InputGoal />
            <GoalsList />
        </View>
  );
}

export default GoalsApp;

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#5e0acc',
      padding: 40
    }
});