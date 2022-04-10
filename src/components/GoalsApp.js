import { 
    View,
    StyleSheet,
    Button
} from 'react-native';
import { useContext } from 'react';
import GoalInput from './GoalInput';
import GoalsList from './GoalsList';
import GoalContext from '../context/GoalContext';

function GoalsApp() {
    const {displayModal} = useContext(GoalContext);

    const handleClick = () => {
        displayModal();
    }

    return (
        <View style={styles.appContainer}>
            <Button 
                title='Add new Goal'
                color='#f542ce'
                onPress={handleClick}
            />
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