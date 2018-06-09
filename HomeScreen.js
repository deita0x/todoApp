import React, { Component } from 'react';
import { View, Text } from 'react-native';

import TodoList from './TodoList';

export default class HomeScreen extends Component {
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

  openTodoForm = () => {
    this.props.navigation.navigate(
      'AddTodoForm',
      {
        addTodo: this.addTodo
      }
    );
  }

  addTodo = (taskText) => {
    const lastTask = this.state.todos[this.state.todos.length - 1]
    console.log('taskText: ', taskText);
    this.setState({
      todos: [
        ...this.state.todos,
        { id: lastTask.id + 1, title: taskText }
      ]
    });
  }

  render() {
    return (
      <TodoList
        todos={this.state.todos}
        openTodoForm={this.openTodoForm}
      />
    );
  }
}