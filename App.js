import React from 'react';

import TodoList from './TodoList';

export default class App extends React.Component {
  state = {
    todos: [
      { id: 1, title: 'Learn react native.' },
      { id: 2, title: 'Learn redux.' },
      { id: 3, title: 'Learn expo.' }
    ]
  };

  render() {
    return (
      <TodoList todos={this.state.todos} />
    );
  }
}

