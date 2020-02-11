import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  StatusBar,
  Text, 
  View 
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import moment from 'moment';
import { Bind } from 'lodash-decorators';

import Calendar from './js/common/components/calendar/calendar/calendar';

import Colors from './js/common/colors/colors';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  @Bind()
  onSelectDate() {
    alert(date.calendar());
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.darkBlue} />
        <Calendar onSelectDate={this.onSelectDate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
    color: Colors.white,
    paddingTop: 20,
  },
});
