import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Bind } from 'lodash-decorators';

import Touchable from '../touchable/touchable';
import { AntDesign } from '@expo/vector-icons';
import Colors from './js/common/colors/colors';

import styles from './menu.styles';

export default class Menu extends PureComponent {

  @Bind()
  menuButton(icon) {
    return(
      <Touchable onPress={onPress}>

      </Touchable>
    )
  }

  render() {

    return (
      <BottomBar
        shapeColor={Colors.bottomBarGrey}
        shapeStyle={{
          bottom: 90
        }}
        firstIconComponent={<AntDesign name="checkcircleo" size={24} color={Colors.darkGrey} />}
        secondIconComponent={<AntDesign name="calendar" size={24} color={Colors.darkGrey} />}
        mainIconComponent={<AntDesign name="pluscircle" size={40} color={Colors.darkBlue} />}
        thirdIconComponent={<AntDesign name="setting" size={24} color={Colors.darkGrey} />}
        fourthIconComponent	={<AntDesign name="logout" size={24} color={Colors.darkGrey} />}
      />
    );
  }
}