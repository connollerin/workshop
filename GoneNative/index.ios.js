/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry, Text, View, StyleSheet } from 'react-native';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class GoneNative extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>{"\n"}Hello world!</Text>
        <Text style={styles.bigblue}>Hey there</Text>
        <Text style={[styles.bigblue, styles.red]}>Its a great day</Text>
        <Text style={[styles.red, styles.bigblue]}>truly great</Text>
      </View>
    );
  }
}

// after class definition but before registering app ...
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('GoneNative', () => GoneNative);
