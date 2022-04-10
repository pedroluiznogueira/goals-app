import { 
    View,
    StyleSheet,
    Button
} from 'react-native';
import { useState } from 'react';
import GoalInput from './GoalInput';
import GoalsList from './GoalsList';

function GoalsApp() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const displayModal = () => {
        setIsModalVisible(true);
    }

    return (
        <View style={styles.appContainer}>
            <Button 
                title='Add new Goal'
                color='#5e0acc'
                onPress={displayModal}
            />
            {isModalVisible && <GoalInput />}
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