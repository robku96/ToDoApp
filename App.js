import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  StatusBar,
  Text, 
  View 
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import BottomBar from 'react-native-bottom-bar';
import moment from 'moment';
import { Bind } from 'lodash-decorators';

import { AntDesign } from '@expo/vector-icons';

import Calendar from './js/common/components/calendar/calendar/calendar';

import Colors from './js/common/colors/colors';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  @Bind()
  onSelectDate(date) {
    alert(date.calendar());
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.darkBlue} />
        <Calendar 
          showDaysAfterCurrent={300}
          onSelectDate={this.onSelectDate} 
        />
        <BottomBar
          shapeColor={Colors.bottomBarGrey}
          shapeStyle={{
            bottom: 90
          }}
          firstIconComponent={<AntDesign name="checkcircleo" size={24} color={Colors.darkGrey} />}
          secondIconComponent={<AntDesign name="calendar" size={24} color={Colors.darkGrey} />}
          mainIconComponent={<AntDesign name="pluscircle" size={40} color={Colors.darkBlue} />}
          thirdIconComponent={<AntDesign name="setting" size={24} color={Colors.darkGrey} />}
          fourthIconComponent	={<AntDesign name="logout" size={24} color={Colors.darkGrey} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: Colors.white,
    backgroundColor: Colors.lightGrey
  },
});
