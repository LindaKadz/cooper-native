/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, ScrollView, TextInput, Button} from 'react-native';


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
                   email: ' Email ',
                   password: ' Password '
                 }
  }
  render() {
   return (
     <View style={styles.container}>
     <View style={styles.welcome}>
       <TextInput
         onChangeText= {(email) => this.setState({email})}
         value= {this.state.email}
       />
     </View>

     <View style={styles.welcome}>
       <TextInput
         onChangeText= {(password) => this.setState({password})}
         value= {this.state.password}
       />
     </View>

     <View style={styles.welcome}>
       <Button title='Login' backgroundColor='#FFFD700'/>
     </View>
   </View>
   );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
   },
});
