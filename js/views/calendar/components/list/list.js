import React, { PureComponent } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { map, noop, some } from 'lodash';
import { Bind } from 'lodash-decorators';

import Colors from '../../../../common/colors/colors';

import Touchable from '../../../../common/components/touchable/touchable';

export default class List extends PureComponent {
  static props = {

  }

  static defaultProps = {

	};

	constructor(props){
		super(props);
		this.state = {
			isOpened: false
		}
	}
	

	get listStyles() {
		if (this.state.isOpened) {
			return styles.isOpened;
		}
		return styles.itemContainer;
	}

  render() {
		
		const listElement = (
			<Touchable style={styles.itemContainer}>
				<Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>Title</Text>
				<Text style={{fontSize: 14, color: 'black'}}>Some descriptin of this task, Some descriptin of this</Text>
			</Touchable>
		);
		const listElementT = (
			<Touchable style={this.listStyles} onPress={() => this.setState({ isOpened: !this.state.isOpened })}>
				<Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>Title</Text>
				<Text style={{fontSize: 14, color: 'black'}}>Some descriptin of this task, Some descriptin of this</Text>
			</Touchable>
		);

    return (
			<ScrollView style={{flex: 1, marginBottom: 56}} onScroll={() => console.log('sdfs')}>
				{listElement}
				{listElement}
				{listElementT}
				{listElement}
				{listElement}
				{listElement}
				{listElement}
				{listElement}
				{listElement}
				{listElement}
				{listElement}
				{listElement}
				{listElement}
				{listElement}
				{listElement}
				{listElement}
				{listElement}
				{listElement}
				{listElement}
				{listElement}
				{listElementT}
				{listElement}
				{listElement}
				{listElement}
			</ScrollView>
    );
  }

}

const styles = StyleSheet.create({
	itemContainer: {
		marginHorizontal: 16,
		marginBottom: 16,
		padding: 16,
		borderRadius: 8,
		flex: 1,
		height: 96,
		backgroundColor: Colors.WHITE,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 1.41,

		elevation: 2,
	},
	isOpened: {
		height: 300,
		marginHorizontal: 16,
		marginBottom: 16,
		padding: 8,
		borderRadius: 8,
		flex: 1,
		backgroundColor: Colors.WHITE
	}
});
