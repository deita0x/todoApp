import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';



const TodoList = ({todos}) => {
  return (
    <FlatList
      data={todos}
      renderItem={({item}) => <Text>{item.title}</Text>}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TodoList;