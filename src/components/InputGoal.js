import { View, StyleSheet, TextInput, Button } from 'react-native';
import { useContext, useState } from 'react';
import GoalContext from '../context/GoalContext';

function InputGoal() {
    const [text, setText] = useState('');
    const {addGoal} = useContext(GoalContext);
    
    const handleSubmit = () => {
        addGoal(text);
    }

    const handleChange = (enteredGoal) => {
        setText(enteredGoal);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput} 
                placeholder="Your course goal"
                placeholderTextColor='#ffffff'
                color='#ffffff'
                onChangeText={handleChange}
                value={text}
                ></TextInput>
            <Button 
                color="#f542ce" 
                title="Add Goal"
                onPress={handleSubmit}
            ></Button>
        </View>
    );
}

export default InputGoal;

const styles = StyleSheet.create({  
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
    }
});