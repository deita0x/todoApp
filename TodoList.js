import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import TodoRow from './TodoRow';

const renderItem = ({item}) => <TodoRow todo={item} />;
const keyExtractor = item => item.id.toString();

const TodoList = ({todos, addTodo}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <TouchableHighlight 
        style={styles.addButton}
        onPress={addTodo}
      >
        <Text style={styles.label}>Add Task</Text>
      </TouchableHighlight>
    </View>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f7f6',
    paddingTop: 40,
    flex: 1,
    justifyContent: 'flex-start'
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#373b43',
    height: 60,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    borderRadius:10
  },
  label: {
    color: '#fff',
    fontSize: 20
  }
});

export default TodoList;