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
      <View style={styles.topView}>
        <TextInput placeholder="Your course goal"></TextInput>
        <Button title="Add Goal"></Button>
      </View>

      {/* goals list */}
      <View style={styles.bottomView}>
        <Text>List of goals...</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 70
  },
  topView: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
