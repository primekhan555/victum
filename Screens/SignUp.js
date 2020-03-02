/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  StatusBar,
  Dimensions,
  ImageBackground,
  Picker,
  ScrollView
} from 'react-native';
import firebase from 'react-native-firebase'
import DatePicker from 'react-native-datepicker';
// import { TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class SignUp extends React.Component {

  static navigationOptions = {
    headerTitleStyle: { textAlign: 'center' },
    title: 'Sign up',
    headerStyle: {
      backgroundColor: '#40E0D0',
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      username: 'd',
      email: 'd',
      phone: 'd',
      address: 'd',
      gender: 'Male',
      date: '',
      password: 'd',
      confirmPassword: 'd',
      uid: 0,
    }
  }
  // var w=Dimensions.get('window').width;
  render() {
    return (
      <ImageBackground
        source={require('../images/back1.jpg')}
        imageStyle={{ opacity: 0.7 }}
        style={styles.body}>
        <ScrollView>
          <StatusBar backgroundColor='#40E0D0' barStyle='dark-content' />
          <Text style={styles.heading}>Username</Text>
          <View style={this.state.username != '' ? styles.singleC : styles.singleCfalse}>
            <TextInput
              keyboardType='default'
              placeholder='Username here'
              underlineColorAndroid='black'
              returnKeyType={'next'}
              onSubmitEditing={() => {
                if (this.state.username != '') {
                  this.emailref.focus();
                }
              }}
              onFocus={() => {
                if (this.state.username == 'd') {
                  this.setState({
                    username: ''
                  })
                }
              }}
              onChangeText={(value) => {
                this.setState({
                  username: value
                })
              }} />
          </View>
          <Text style={styles.heading}>Email</Text>
          <View style={this.state.email != '' ? styles.singleC : styles.singleCfalse}>
            <TextInput
              ref={emailref => this.emailref = emailref}
              keyboardType='default'
              placeholder='Email here'
              underlineColorAndroid='black'
              returnKeyType={'next'}
              onSubmitEditing={() => {
                if (this.state.email != '') {
                  this.phoneref.focus();
                }
              }}
              onFocus={() => {
                if (this.state.email == 'd') {
                  this.setState({
                    email: ''
                  })
                }
              }}
              onChangeText={(value) => {
                this.setState({
                  email: value
                })
              }} />
          </View>
          <Text style={styles.heading}>Phone</Text>
          <View style={this.state.phone != '' ? styles.singleC : styles.singleCfalse}>
            <TextInput
              ref={phoneref => this.phoneref = phoneref}
              keyboardType='default'
              placeholder='Phone here'
              underlineColorAndroid='black'
              returnKeyType={'next'}
              onSubmitEditing={() => {
                if (this.state.phone != '') {
                  this.addressref.focus();
                }
              }}
              onFocus={() => {
                if (this.state.phone == 'd') {
                  this.setState({
                    phone: ''
                  })
                }
              }}
              onChangeText={(value) => {
                this.setState({
                  phone: value
                })
              }} />
          </View>
          <Text style={styles.heading}>Address</Text>
          <View style={this.state.address != '' ? styles.singleC : styles.singleCfalse}>
            <TextInput
              ref={addressref => this.addressref = addressref}
              keyboardType='default'
              placeholder='Address here'
              underlineColorAndroid='black'
              returnKeyType={'next'}
              onSubmitEditing={() => {
                // if (this.state.address != '') {
                //   this.passref.focus();
                // }
              }}
              onFocus={() => {
                if (this.state.address == 'd') {
                  this.setState({
                    address: ''
                  })
                }
              }}
              onChangeText={(value) => {
                this.setState({
                  address: value
                })
              }} />
          </View>
          <Text style={styles.heading}>Gender</Text>
          <View style={styles.singleC}>
            <Picker
              selectedValue={this.state.gender}
              style={{ fontWeight: 'bold' }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ gender: itemValue })
              }>
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
          <Text style={styles.heading}>Date of Birth</Text>
          <View style={{ alignSelf: 'center', borderRadius: 5 }}>
            <DatePicker
              style={{
                width: Dimensions.get('screen').width - 20,
                borderRadius: 5,
                paddingRight: 5,
                opacity: 2,
              }}
              mode="date"
              date={this.state.date}
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="1950-01-01"
              maxDate="2025-01-01"
              showIcon={false}
              customStyles={{
                dateIcon: {
                  position: 'relative',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 10
                }
              }}
              onDateChange={(newDate) => {
                this.setState({
                  date: newDate,
                })
              }} />
          </View>
          <Text style={styles.heading}>password</Text>
          <View style={this.state.password != '' ? styles.singleC : styles.singleCfalse}>
            <TextInput
              // ref={passref => this.passref = passref}
              keyboardType='default'
              placeholder='Password must be six character'
              secureTextEntry={true}
              underlineColorAndroid='black'
              returnKeyType={'next'}
              onSubmitEditing={() => {
                if (this.state.password != '') {
                  this.conpassref.focus();
                }
              }}
              onFocus={() => {
                if (this.state.password == 'd') {
                  this.setState({
                    password: ''
                  })
                }
              }}
              onChangeText={(value) => {
                this.setState({
                  password: value
                })
              }} />
          </View>
          <Text style={styles.heading}>Confirm password</Text>
          <View style={this.state.confirmPassword != '' ? styles.singleC : styles.singleCfalse}>
            <TextInput
              ref={conpassref => this.conpassref = conpassref}
              keyboardType='default'
              placeholder='Confirm password here'
              secureTextEntry={true}
              underlineColorAndroid='black'
              returnKeyType={'done'}
              onFocus={() => {
                if (this.state.confirmPassword == 'd') {
                  this.setState({
                    confirmPassword: ''
                  })
                }
              }}
              onChangeText={(value) => {
                this.setState({
                  confirmPassword: value
                })
              }} />
          </View>
          <TouchableOpacity
            onPress={() => {
              if (this.state.username == '') {
                return;
              }
              if (this.state.email == '') {
                return;
              }
              if (this.state.password == '') {
                return;
              }
              if (this.state.confirmPassword == '') {
                return;
              }
              if (this.state.password == this.state.confirmPassword) {
                firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                  .then(() => {
                    var curr = firebase.auth().currentUser.uid;
                    firebase.database().ref('users').child('Patients').child(curr).set({
                      name: this.state.username,
                      email: this.state.email,
                      password: this.state.password,
                      date: this.state.date,
                      gender: this.state.gender,
                      address: this.state.address,
                      question: this.state.question,
                      answer: this.state.answer
                    })
                  })
                  .then(() => {
                    let curr = firebase.auth().currentUser.uid;
                    AsyncStorage.setItem('uid', curr, () => {
                      AsyncStorage.setItem('type', 'patient', () => {
                        this.props.navigation.navigate('Appbar')
                      })
                    })
                    AsyncStorage.setItem('patientName', this.state.name, () => {
                      AsyncStorage.setItem('patientemail', this.state.email, () => {
                      })
                    })
                  })
                  .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                  })
              }

            }}
            style={{
              backgroundColor: '#40E0D0',
              width: 250,
              height: 40,
              justifyContent: "center",
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 20,
              borderRadius: 5
            }}>
            <Text style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 17
            }}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('SignIn')
            }} >
            <Text
              style={{
                color: '#40E0D0',
                paddingTop: 5,
              }}
            >Already have an account</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 85,
  },
  singleC: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get('window').width - 20,
    alignSelf: 'center',
  },
  singleCfalse: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get('window').width - 20,//wp('95%'),
    alignSelf: 'center',
  },
  heading: {
    paddingLeft: wp('2%')
  }
})