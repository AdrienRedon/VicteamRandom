import React, {
  Component,
} from 'react';
import {
  Text,
  View,
} from 'react-native';

import style from './footer.styles';

class Footer extends Component {
  render() {
    const footerStyle = [style.container];
    return (
      <View style={footerStyle}>
        <Text>
          Created by Adrien REDON
        </Text>
      </View>
    )
  }
}

export default Footer;
