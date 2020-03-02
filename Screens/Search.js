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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Search extends React.Component{
  
  render(){
    return(
      <View>
        <Icon style={[{color: 'black'}]} size={25} name={'md-search'}/> 

        <Text>Third Screen</Text>
        <TouchableOpacity>
          <Text>click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}