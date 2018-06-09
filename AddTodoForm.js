import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

export default class AddTodoForm extends Component {
  state = { text: '', height: 60 };

  constructor(props) {
    super(props);
  }

  updateSize = height => {
    this.setState({ height });
  }

  onChangeText = text => this.setState({ text });

  onContentSizeChange = event => {
    this.updateSize(event.nativeEvent.contentSize.height);
  }

  addTodo = () => {
    const { navigation } = this.props;
    const addTodoFn = navigation.getParam('addTodo', () => {});

    if (this.state.text) {
      addTodoFn(this.state.text);
      navigation.goBack();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.taskLabel}>Create new task</Text>
        </View>

        <View style={styles.box2}>
          <TextInput
            placeholder={'Text here!'}
            multiline={true}
            style={[{ height: this.state.height }, styles.inputBox]}
            onChangeText={this.onChangeText}
            underlineColorAndroid={'transparent'}
            onContentSizeChange={this.onContentSizeChange}
            selectionColor={'#03A9F4'}
            maxLength={50}
          />
        </View>

        <View style={styles.box3}>
          <TouchableHighlight 
            style={styles.addButton}
            onPress={this.addTodo}
          >
            <Text style={styles.label}>Add</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f7f6',
    flex: 1
  },
  box1: {
    flex: .5
  },
  box2: {
    flex: 4
  },
  box3: {
    flex: 1,
    justifyContent: 'center'
  },
  taskLabel: {
    color: '#03A9F4',
    fontSize: 40,
    marginLeft: 20
  },
  inputBox: {
    color: '#d7d7d7',
    fontSize: 60,
    marginLeft: 20,
    marginRight: 20
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#373b43',
    height: 60,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10
  },
  label: {
    color: '#fff',
    fontSize: 20
  }
});
