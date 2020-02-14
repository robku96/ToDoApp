import React, { Component } from 'react';
import { 
  StyleSheet, 
  StatusBar,
  Text, 
  View,
  Image
} from 'react-native';
import { Bind } from 'lodash-decorators';

import Menu from '../../common/components/menu/menu';

import Colors from '../../common/colors/colors';
import TextStyles from '../../common/styles/text';
import { METRIC_SMALL } from '../../common/consts/variables';

import strings from '../../common/consts/strings';

import Button from "../../common/components/button/button";
import Input from "../../common/components/input/input";
import imageLogo from "../../common/assets/logo.png";

class SignInView extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleEmailChange = (email) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    this.props.navigation.navigate('Calendar')
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <Input
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={strings.EMAIL_PLACEHOLDER}
          />
          <Input
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
          />
          <Button mode="link" label={strings.CREATE_AN_ACCOUNT} onPress={this.handleLoginPress} />
          <Button label={strings.LOGIN} onPress={this.handleLoginPress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "40%",
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 8
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

export default SignInView;