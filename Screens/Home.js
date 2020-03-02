/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends React.Component{
    
  render(){
    return(
      <View>
        <Icon style={[{color: 'black'}]} size={25} name={'ios-home'}/> 
        <Text>Second Screen</Text>
        <TouchableOpacity>
          <Text>click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// const bar =createMaterialBottomTabNavigator(
//     {
//       Home:{screen:Second},
//       Third:{screen:Third},
//     },
//     {
//       initialRouteName: 'Third',
//       activeColor: '#f0edf6',
//       inactiveColor: '#3e2465',
//       barStyle: { backgroundColor: '#ff5555' },
//     }
//   );
//    createAppContainer(bar);
  