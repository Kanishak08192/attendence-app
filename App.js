import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
export default class App extends React.Component {
  render() {
    return (
      <View>
      <Text style={{textAlign:"center",fontWeight:"bold",fontSize:30}}>School Attendence App</Text>
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SummaryScreen: SummaryScreen,
});

const AppContainer = createAppContainer(AppNavigator);
