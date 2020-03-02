import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    AsyncStorage,
    StatusBar,
    ScrollView,
    ImageBackground,
    Dimensions,
    ToastAndroid,
    Picker,
} from 'react-native';
import firebase from 'react-native-firebase'
export default class ForgotPassword extends Component {
    static navigationOptions = {
        title: 'Forgot Password',
        headerStyle: {
            backgroundColor: '#40E0D0'
        }
    }
    state = {
        question: 'WhatIsyourfavoritebook?',
        answer: '',
        uid: 0,
        arr: [],
        email: ''
    }
    checking(email) {
        var ref = firebase.database().ref();
        ref.child('users').child('Patients').on('value', (datasnapshot) => {
            if ((datasnapshot.exists())) {
                var value = datasnapshot.val();
                var key = Object.keys(value);
                key.forEach(element => {
                    ref.child('users').child('Patients').child(element).on('value', (datasnapshot1) => {
                        if ((datasnapshot1.exists())) {
                            var email1 = datasnapshot1.val().email;
                            var stremail = email1.toString();
                            if (stremail == email) {
                                if (this.state.question == datasnapshot1.val().question) {
                                    if (this.state.answer == datasnapshot1.val().answer) {
                                        var auth = firebase.auth();
                                        var emailAddress = this.state.email;
                                        auth.sendPasswordResetEmail(emailAddress).then(function () {
                                            ToastAndroid.show('Email Send Please check your email', ToastAndroid.SHORT);
                                            this.props.navigation.navigate('PatientSignIn');

                                        }).catch(function (error) {
                                            ToastAndroid.show('Error in Sending Email, Please try again', ToastAndroid.SHORT);
                                        });
                                    }
                                }
                            }
                        }
                    })
                });
            }
        })
    }
    componentDidMount() {

    }
    render() {
        return (
            <ScrollView>
                <View style={{}}>
                    <StatusBar backgroundColor='#40E0D0' barStyle='dark-content' />
                    <ImageBackground
                        source={require('../images/back3.jpg')}
                        imageStyle={{ opacity: .5 }}
                        style={{ height: 200, }}>
                        <View style={{
                            height: 200,
                            width: Dimensions.get('window').width
                        }}>
                            <Text style={{
                                fontSize: 35,
                                paddingLeft: 10,
                                paddingTop: 100
                            }}>Hello there!</Text>
                            <Text style={{
                                fontSize: 20,
                                paddingLeft: 20
                            }}>Reset Password</Text>
                        </View>
                    </ImageBackground>

                    <View style={{
                        paddingLeft: 20,
                        paddingEnd: 20,
                        paddingTop: 20
                    }}>
                        <Text style={styles.text}>Email</Text>
                        <TextInput
                            keyboardType='default'
                            placeholder='Email here'
                            underlineColorAndroid='black'
                            onChangeText={(value) => {
                                this.setState({
                                    email: value
                                })
                            }} />
                       
                        <TouchableOpacity
                            onPress={() => {
                                if (this.state.email == '') {
                                    return;
                                }
                                var auth = firebase.auth();
                                var emailAddress = this.state.email;
                                auth.sendPasswordResetEmail(emailAddress).then(function () {
                                    ToastAndroid.show('Email Send Please check your email', ToastAndroid.SHORT);
                                    this.props.navigation.navigate('SignIn');

                                }).catch(function (error) {
                                    ToastAndroid.show('Error in Sending Email, Please try again', ToastAndroid.SHORT);
                                });
                                // this.checking(this.state.email);
                               
                            }}
                            style={{
                                backgroundColor: '#40E0D0',
                                width: 250,
                                height: 40,
                                justifyContent: "center",
                                alignItems: 'center',
                                alignSelf: 'center',
                                marginTop: 30,
                                borderRadius: 5,

                            }}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 17
                            }}>Send Reset Email</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity
                        onPress={()=>{
                            
                        }}
                        >
                        <Text 
                        style={{
                            color:'#40E0D0',
                            paddingTop:5,
                        }}
                        >Forgot Password?</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
    }
})