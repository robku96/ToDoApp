import * as React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import PropTypes from 'prop-types';
import Colors from '../../colors/colors';

class FormTextInput extends React.Component {
  static props = {
		style: PropTypes.string,
		selectionColor: PropTypes.string
	}

	static defaultProps = {
		style: '',
		selectionColor: ''
	}

  render() {
    const { style, ...otherProps } = this.props;
    return (
      <TextInput
        selectionColor={Colors.DODGER_BLUE}
        style={[styles.textInput, style]}
        {...otherProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: Colors.SILVER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  }
});

export default FormTextInput;