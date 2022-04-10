import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function GoalItem (props) {
    return (
    <View style={styles.goalItem} key={props.item.key}>
        <Text style={styles.goalText}>{props.item.text}</Text>
    </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({  
    goalItem: {
      padding: 8,
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#f542ce'
    },
    goalText: {
      color: 'black'
    }
  });