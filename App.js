import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Bind } from 'lodash-decorators';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// App views
import SignInView from './js/views/signIn/signIn.view';
import SignUpView from './js/views/signUp/signUp.view';
import TasksView from './js/views/tasks/tasks.view';
import AddTaskView from './js/views/add/addTask.view';
import SettingsView from './js/views/settings/settings.view';
import CalendarView from './js/views/calendar/calendar.view';

import Menu from './js/common/components/menu/menu';

import { TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';

import Colors from './js/common/colors/colors';

const Stack = createStackNavigator();
export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const customHeaderOptions = {
      headerTitleAlign: "center",
      headerTintColor: Colors.WHITE,
      headerStyle: {
        backgroundColor: Colors.DARK_BLUE
      },
      headerTitleStyle: {
        color: Colors.WHITE,
        fontWeight: 'bold'
      },
    };

    const myTransition = {
      gestureDirection: 'horizontal',
      transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
      },
      headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    };

    return (
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen 
              name="SignIn" 
              component={SignInView} 
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="SignUp" 
              component={SignUpView} 
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="Tasks" 
              component={TasksView} 
              options={{
                title: "All your tasks",
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: Colors.DARK_BLUE
                },
                headerTitleStyle: {
                  color: Colors.WHITE,
                  fontWeight: 'bold'
                },
                headerTintColor: Colors.WHITE,
                ...myTransition
              }}
            />
            <Stack.Screen 
              name="Calendar" 
              component={CalendarView} 
              options={{
                headerShown: false,
                ...myTransition
              }}
            />
            <Stack.Screen 
              name="AddTask" 
              component={AddTaskView} 
              options={{
                title: "Add new task",
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: Colors.DARK_BLUE
                },
                headerTitleStyle: {
                  color: Colors.WHITE,
                  fontWeight: 'bold'
                },
                headerLeftStyle: {
                  color: Colors.WHITE
                },
                headerTintColor: Colors.WHITE,
              }}
            />
            <Stack.Screen 
              name="Settings" 
              component={SettingsView} 
              options={{
                title: "App settings",
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: Colors.DARK_BLUE
                },
                headerTitleStyle: {
                  color: Colors.WHITE,
                  fontWeight: 'bold'
                },
                headerLeftStyle: {
                  color: Colors.WHITE
                },
                headerTintColor: Colors.WHITE,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}