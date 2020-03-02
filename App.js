import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignUp from './Screens/SignUp';
import SignIn from './Screens/SignIn';
import Home from './Screens/Home';
import ForgotPassword from './Screens/ForgotPassword';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from './Screens/Search';
import Profile from './Screens/Profile';

const bar = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        activeColor: '#fa7a7a',
        inactiveColor: 'grey',
        barStyle: { backgroundColor: 'white' },
        // barStyle: { backgroundColor: '#fa7a7a' },
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'md-home'} />
          </View>),
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: 'Search',
        activeColor: '#77c987',
        inactiveColor: 'grey',
        // barStyle: { backgroundColor: '#77c987' },
        barStyle: { backgroundColor: 'white' },
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'md-search'} />
          </View>),
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        activeColor: '#bf87ff',
        inactiveColor: 'grey',
        barStyle: { backgroundColor: 'white' },
        // barStyle: { backgroundColor: '#bf87ff' },
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'md-person'} />
          </View>),
      }
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#fa7a7a',
    inactiveColor: 'grey',
    barStyle: { backgroundColor: 'white' },
  }
);
const AppNavigator = createStackNavigator({
  SignUp: {
    screen: SignUp,
  },
  SignIn: {
    screen: SignIn
  },
  ForgotPassword: {
    screen: ForgotPassword,
  },
  Appbar: {
    screen: bar,
    navigationOptions:{
      headerShown:false
    }
  }
});
export default createAppContainer(AppNavigator);