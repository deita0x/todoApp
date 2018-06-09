import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TodoRow = ({todo}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{todo.title}</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e45151',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10
  },
  label: {
    color: '#fff'
  }
});

export default TodoRow;
