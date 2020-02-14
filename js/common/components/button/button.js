import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';
import Colors from "../../colors/colors";
import { noop } from 'lodash-decorators';

class Button extends React.Component {
	static props = {
		label: PropTypes.string,
		onPress: PropTypes.func,
		mode: PropTypes.oneOf(['default', 'link'])
	}

	static defaultProps = {
		label: '',
		onPress: noop,
		mode: 'default'
	}

	get containerStyles() {
		let currentStyles = styles.container;
		if (this.props.mode === 'link') {
			currentStyles.backgroundColor = Colors.WHITE;
		} else {
			currentStyles.backgroundColor = Colors.DARK_BLUE;
		}
		return currentStyles;
	}

	get textStyles() {
		let currentStyles = styles.text;
		if (this.props.mode === 'link') {
			currentStyles.color = Colors.DARK_GREY;
		} else {
			currentStyles.color = Colors.WHITE;
		}
		return currentStyles;
	}

  render() {
		const { label, onPress, mode } = this.props;
		const containerStyles = [styles.container];
		if (mode === 'link') {
			containerStyles.push(styles.link);
		}

		const textStyles = [styles.text];
		if(mode === 'link') {
			textStyles.push(styles.blackText);
		}
    return (
      <TouchableOpacity style={containerStyles} onPress={onPress}>
        <Text style={textStyles}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		width: "100%",
		backgroundColor: Colors.DARK_BLUE,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
	},
  text: {
		textAlign: "center",
		color: Colors.WHITE,
    height: 20
	},
	link: {
		backgroundColor: Colors.WHITE
	},
	blackText: {
		color: Colors.BLACK
	}
});

export default Button;