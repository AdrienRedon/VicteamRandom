import React, {
  Component,
} from 'react';
import {
  Text,
  View,
} from 'react-native';

import style from './header.styles';

class Header extends Component {
  render() {
    const navbarStyle = [style.container];
    return (
      <View style={navbarStyle}>
        <Text>
          VicteamRandom
        </Text>
      </View>
    )
  }
}

export default Header;
