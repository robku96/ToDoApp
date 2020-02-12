import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

// Component which handles touch effect
export default class Touchable extends PureComponent {
  static propTypes = {
    // Children component wrapped with this component
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...other } = this.props;
    return (
      <TouchableOpacity {...other}>
        {children}
      </TouchableOpacity>
    );
  }
}