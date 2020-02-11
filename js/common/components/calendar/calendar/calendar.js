import React, { PureComponent } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import PropTypes from 'prop-types';
import { map, noop } from 'lodash';
import { Bind } from 'lodash-decorators';
import moment from 'moment';

import styles from './calendar.styles';


export default class Calendar extends PureComponent {
  static props = {
    // Optional prop to pass a custom date to use instead of today
    currentDate: PropTypes.string,
    
		// Callback executed when user taps on a date
    onSelectDate: noop,
    
		// Number of days to show before today
    showDaysBeforeCurrent: PropTypes.number,
    
    // Number of days to show after today or custom current date
    showDaysAfterCurrent: PropTypes.number,
  }

  static defaultProps = {
    showDaysBeforeCurrent: 5,
    showDaysAfterCurrent: 5,
  };

  constructor(props) {
    super(props);
    this.state = {
      // True when all dates have rendered
      allDatesHaveRendered: false,

      // Currently chosen date index
      currentDateIndex: props.showDaysBeforeCurrent,

      // Array of dates to show
      dates: this.getDates(),

      // Store each day with to help with scrolling to specific days and calculating which days are visible on the screen
      dayWidths: undefined,

      // Store current scroll position
      scrollPositionX: 0,

      // Store months and years of the dates visible on the screen for rendering month(s) and year(s) above the dates
      visibleMonths: undefined,
      visibleYears: undefined,
    };
  }

  // Ref to scrollable element
  scrollViewRef;

  // Get an array of dates for showing in a horizontal scroll view
  @Bind()
  getDates() {
    const { currentDate, showDaysBeforeCurrent, showDaysAfterCurrent } = this.props;

    // Go `showDaysBeforeCurrent` ago before today or custom `currentDate`
    // moment(undefined) => today
    const startDay = moment(currentDate || undefined).subtract(showDaysBeforeCurrent + 1, 'days');

    // Number of days in total (5 + 1 + 5)
    const totalDaysCount = showDaysBeforeCurrent + showDaysAfterCurrent + 1;

    // And return an array of `totalDaysCount` dates
    return map([...Array(totalDaysCount)],() => startDay.add(1, 'day').clone());
  };

  render() {
    return (
      <View>
        <Text style={styles.visibleMonthAndYear}>
          November, 2020 // random month and year for now
        </Text>
        <ScrollView
          ref={scrollView => { 
            this.scrollViewRef = scrollView; 
          }}
          horizontal={true}                         // Enable horizontal scrolling
          showsHorizontalScrollIndicator={false}    // Hide horizontal scroll indicators
          automaticallyAdjustContentInsets={false}  // Do not adjust content automatically
        >
          <Text>{JSON.stringify(this.state.dates, null, 2)}</Text>
        </ScrollView>
      </View>
    );
  }

}
