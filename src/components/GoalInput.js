import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';
import { useContext, useState } from 'react';
import GoalContext from '../context/GoalContext';

function GoalInput() {
    const [text, setText] = useState('');
    const {addGoal, isModalVisible, hideModal} = useContext(GoalContext);
    
    const handleSubmit = () => {
        addGoal(text);
        setText('');
    }

    const handleChange = (enteredGoal) => {
        setText(enteredGoal);
    };

    const handleCancel = () => {
        hideModal();
    }

    return (
        <Modal 
            visible={isModalVisible} 
            animationType='slide'
        >
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your course goal'
                    placeholderTextColor='#ffffff'
                    color='#ffffff'
                    onChangeText={handleChange}
                    value={text}
                    ></TextInput>
                <View style={styles.buttonsContainer}>    
                    <Button 
                        color='#5e0acc'
                        title='Add Goal'
                        onPress={handleSubmit}
                        disabled={text.length === 0}
                    ></Button>
                    <Button 
                        color='#5e0acc'
                        title='Cancel'
                        onPress={handleCancel}
                    ></Button>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({  
    inputContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f542ce'
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '70%',
      margin: 20,
      padding: 10
    },
    buttonsContainer: {
        width: 200,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    }
});