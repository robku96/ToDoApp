import React, { Component } from 'react';
import { 
  StyleSheet, 
  StatusBar,
  Text, 
  View 
} from 'react-native';
import { Bind } from 'lodash-decorators';

import Menu from '../../common/components/menu/menu';

import Colors from '../../common/colors/colors';
import TextStyles from '../../common/styles/text';
import { METRIC_SMALL } from '../../common/consts/variables';

export default class SignUpView extends Component {

  render() {
    return (
			<View style={styles.viewContainer}>
				<StatusBar backgroundColor={Colors.DARK_BLUE} />
				<Text style={styles.sectionHeader}>Sign up</Text>
				<Menu navigation={this.props.navigation} />
			</View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    color: Colors.white,
    backgroundColor: Colors.LIGHT_GREY
  },
  sectionHeader: {
    ...TextStyles.Regular1,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    paddingHorizontal: METRIC_SMALL,
    paddingVertical: METRIC_SMALL
  }
});
