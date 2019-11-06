/**
 * IAbroad App
 * @author: Jay
 * @Url: https://www.friendfill.com
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {config} from '../config/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';
import styles from './styles/LoggedOut';
import { from } from 'zen-observable';

const iabroadLogo = require('../img/iabroad.png');

export default class LoggedOut extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <NavBarButton handleButtonPress={() => navigation.navigate('LogIn')} location="right" color={colors.white} text="Log In" />,
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: colors.white,
  });

  static onFacebookPress() {
    alert('Facebook button pressed');
  }

  static onCreateAccountPress() {
    alert('Create Account button pressed');
  }

  static onMoreOptionsPress() {
    alert('More options button pressed');
  }

  render() {
    console.log(config);
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <View style={styles.logoWrapper}>
            <Image
              source={iabroadLogo}
              style={styles.logo}
            />
            <Text style={styles.welcomeText}>
  Welcome to {config.APP_NAME}.
            </Text>
          </View>
          
          <RoundedButton
            text="Continue with Facebook"
            textColor={colors.green01}
            background={colors.white}
            icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
            handleOnPress={this.onFacebookPress}
          />
          <RoundedButton
            text="Create Account"
            textColor={colors.white}
            handleOnPress={this.onCreateAccountPress}
          />

        </View>
      </ScrollView>
    );
  }
}
