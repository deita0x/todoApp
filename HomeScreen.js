import React from 'react';
import { View, Text } from 'react-native';

import TodoList from './TodoList';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Todo App'
  };

  state = {
    todos: [
      { id: 1, title: 'Learn React native.' },
      { id: 2, title: 'Learn redux.' },
      { id: 3, title: 'Learn expo.' },
      { id: 4, title: 'Learn webpack.' }
    ]
  };

  addTodo = () => {
    this.props.navigation.navigate('AddTodoForm');
  }

  render() {
    return (
      <TodoList
        todos={this.state.todos}
        addTodo={this.addTodo}
      />
    );
  }
}