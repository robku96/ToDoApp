import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import { Bind } from 'lodash-decorators';

import styles from './date.styles';


export default class Date extends PureComponent {

  static props = {
    // Date to render
    date: PropTypes.string,

    // Index for `onPress` and `onRender` callbacks
    index: PropTypes.number,

    // Whether it's the currently selected date or no
    isActive: PropTypes.boolean,

    // Called when user taps a date
    onPress: noop,

    // Called after date is rendered to pass its width up to the parent component
    onRender: noop,
  };

  // Style helper functions that merge active date styles with the default ones
  // when rendering a date that was selected by user or was set active by default

  getContainerStyle = () => ({
    ...styles.container,
    ...(this.props.isActive ? styles.containerActive : {})
  });

  getDayStyle = () => ({
    ...styles.text,
    ...styles.day,
    ...(this.props.isActive ? styles.textActive : {})
  });

  getDateStyle = () => ({
    ...styles.text,
    ...styles.date,
    ...(this.props.isActive ? styles.textActive : {})
  });

	// Call `onRender` and pass component's with when rendered
	@Bind()
  onLayout(event) {
    const { index, onRender } = this.props;
    const { nativeEvent: { layout: { width } } } = event;
    onRender(index, width);
  };

	// Call `onPress` passed from the parent component when date is pressed
	@Bind()
  onPress() {
    const { index, onPress } = this.props;
    onPress(index);
  };

  render() {
    const { date } = this.props;
    return (
      <TouchableOpacity
        style={this.getContainerStyle()}
        onLayout={this.onLayout}
        onPress={this.onPress}
      >
        <Text style={this.getDayStyle()}>{date.format('ddd').toUpperCase()}</Text>
        <Text style={this.getDateStyle()}>{date.format('DD')}</Text>
      </TouchableOpacity>
    );
  }

}