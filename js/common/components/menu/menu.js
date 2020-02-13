import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Bind } from 'lodash-decorators';

import BottomBar from 'react-native-bottom-bar';
import { AntDesign } from '@expo/vector-icons';

import Touchable from '../touchable/touchable';
import Colors from '../../colors/colors';
import { 
  METRIC_X_SMALL, 
  METRIC_BASE, 
  METRIC_MED 
} from '../../consts/variables';
export default class Menu extends Component {

  @Bind()
  tasksButton() {
    return(
      <Touchable 
        onPress={() => this.props.navigation.navigate('Tasks')}
      >
        <AntDesign 
          name="checkcircleo" 
          size={METRIC_BASE} 
          color={Colors.darkGrey} 
        />
      </Touchable>
    )
  }

  @Bind()
  calendarButton() {
    return(
      <Touchable 
        onPress={() => this.props.navigation.navigate('Calendar')}
      >
        <AntDesign 
          name="calendar" 
          size={METRIC_BASE} 
          color={Colors.darkGrey} 
        />
      </Touchable>
    )
  }

  @Bind()
  addButton() {
    return(
      <Touchable 
        onPress={() => this.props.navigation.navigate('AddTask')}
      >
        <AntDesign 
          name="pluscircle" 
          size={METRIC_MED - METRIC_X_SMALL} 
          color={Colors.darkBlue} 
        />
      </Touchable>
    )
  }

  @Bind()
  settingsButton() {
    return(
      <Touchable 
        onPress={() => this.props.navigation.navigate('Settings')}
      >
        <AntDesign 
          name="setting" 
          size={METRIC_BASE} 
          color={Colors.darkGrey} 
        />
      </Touchable>
    )
  }

  @Bind()
  signOutButton() {
    return(
      <Touchable 
        onPress={() => this.props.navigation.navigate('SignIn')}
      >
        <AntDesign 
          name="logout" 
          size={METRIC_BASE} 
          color={Colors.darkGrey} 
        />
      </Touchable>
    )
  }

  render() {
    return (
      <BottomBar
        shapeColor={Colors.bottomBarGrey}
        shapeStyle={{ bottom: 90 }}
        firstIconComponent={this.tasksButton()}
        secondIconComponent={this.calendarButton()}
        mainIconComponent={this.addButton()}
        thirdIconComponent={this.settingsButton()}
        fourthIconComponent	={this.signOutButton()}
      />
    );
  }
}