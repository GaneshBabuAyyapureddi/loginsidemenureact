import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import LoginPage from './pages/Login';

export default class App extends React.Component {
  render() {
    return (

      <View>

        <Image source={require('./Images/backImages.jpeg')} style={{ position: 'relative', width: '100%', height: '100%' }} ></Image>

        <View style={{
          margin: 20,
          top: '35%',
          width: '90%',
          alignItems: 'center',
          position: 'absolute'
        }}><Text>hello</Text>
        </View>


      </View>
    );
  }
}




