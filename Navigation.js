import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen'
import AddTodoForm from './AddTodoForm';

const Navigation = createStackNavigator(
  {
    Home: HomeScreen,
    AddTodoForm: AddTodoForm
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

export default Navigation;