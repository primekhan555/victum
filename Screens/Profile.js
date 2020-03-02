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

export default class Profile extends React.Component{
    
  render(){
    return(
      <View>
        <Icon style={[{color: 'black'}]} size={25} name={'ios-person'}/> 
        <Text>Profile Screen</Text>
        <TouchableOpacity>
          <Text>click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
