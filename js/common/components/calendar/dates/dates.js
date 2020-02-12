import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import Date from '../date/date';

import styles from './dates.styles';

export default class Dates extends PureComponent {
  static props = {
    // Currently active date index
    currentDateIndex: PropTypes.number,

    // Array of dates to render
    dates: PropTypes.arrayOf(PropTypes.string),

    // Callback to handle date select
    onSelectDay: noop,
    
    // Callback to handle date render
    onRenderDay: noop,
  };

  render() {
    const {
      currentDateIndex,
      dates,
      onSelectDay,
      onRenderDay,
		} = this.props;
		
    return (
      <View style={styles.container}>
        {dates.map((date, index) =>
          <View key={index}>
            <Date
              date={date}
              index={index}
              isActive={index === currentDateIndex}
              onPress={onSelectDay}
              onRender={onRenderDay}
              key={index}
            />
          </View>
        )}
      </View>
    );
  }

}