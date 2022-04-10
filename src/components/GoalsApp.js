import { 
    View,
    StyleSheet
} from 'react-native';
import GoalInput from './GoalInput';
import GoalsList from './GoalsList';

function GoalsApp() {

    return (
        <View style={styles.appContainer}>
            <GoalInput />
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