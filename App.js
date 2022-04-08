import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput
} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>

      {/* input and button */}
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Your course goal"
          placeholderTextColor="black"
          ></TextInput>
        <Button title="Add Goal"></Button>
      </View>

      {/* goals list */}
      <View style={styles.bottomView}>
        <Text>List of goals...</Text>
      </View>

      {/* flex box squares */}
      <View style={styles.squares}>
        <View style={styles.one}>
          <Text>1</Text>
        </View>

        <View style={styles.two}>
          <Text>2</Text>
        </View>

        <View style={styles.three}>
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    // padding: 70
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  },

  one: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 100,
    height: 100
  },
  two: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    width: 100,
    height: 100
  },
  three: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    width: 100,
    height: 100
  },

  squares: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 30
  }
});
