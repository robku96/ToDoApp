import React, { Component } from 'react';
import { 
  StyleSheet, 
  StatusBar,
  Text, 
  View 
} from 'react-native';
import { Bind } from 'lodash-decorators';

import Calendar from '../../common/components/calendar/calendar/calendar';
import List from './components/list/list';
import Menu from '../../common/components/menu/menu';

import Colors from '../../common/colors/colors';
import TextStyles from '../../common/styles/text';
import { METRIC_SMALL } from '../../common/consts/variables';

class CalendarView extends Component {
	constructor(props) {
		super(props);
	}

  @Bind()
  onSelectDate(date) {
		console.log(date);
		console.log(this.props.navigation);
  };

  render() {
    return (
			<View style={styles.viewContainer}>
				<StatusBar backgroundColor={Colors.darkBlue} />
				<Calendar onSelectDate={this.onSelectDate} />
				<Text style={styles.sectionHeader}>Today's tasks</Text>
        <List />
				<Menu navigation={this.props.navigation}/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    color: Colors.white,
    backgroundColor: Colors.lightGrey
  },
  sectionHeader: {
    ...TextStyles.Regular1,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    paddingHorizontal: METRIC_SMALL,
    paddingVertical: METRIC_SMALL
  }
});

export default CalendarView;