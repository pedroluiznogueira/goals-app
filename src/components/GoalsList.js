import {
    View, 
    FlatList,
    StyleSheet
} from 'react-native';
import GoalItem from './GoalItem';
import { useContext } from 'react';
import GoalContext from '../context/GoalContext';

function GoalsList() {
    const {goals} = useContext(GoalContext);

    return (
        <View style={styles.goalsContainer}>
            <FlatList 
                data={goals}
                renderItem={(goalData) => {
                return <GoalItem goal={goalData.item}/>
                }}
                alwaysBounceVertical={false}
            />
        </View>
    );
}

export default GoalsList;

const styles = StyleSheet.create({  
    goalsContainer: {
      flex: 0.8
    }
});