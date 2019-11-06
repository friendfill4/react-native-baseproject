/**
 * IAbroad App
 * @author: Jay
 * @Url: https://www.friendfill.com
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Easing,
  Animated,
} from 'react-native';
import colors from '../styles/colors';

export default class Notification extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
      positionValue: new Animated.Value(-10),
  	};
  	this.closeNotification = this.closeNotification.bind(this);
  	this.animateNotification = this.animateNotification.bind(this);
  }

  animateNotification(value) {
  	const { positionValue } = this.state;
    Animated.timing(
      positionValue,
      {
        toValue: value,
        duration: 300,
        velocity: 3,
        tension: 2,
        friction: 8,
        easing: Easing.easeOutBack,
      },
    ).start();
  }

  closeNotification() {
    this.props.handleCloseNotification();
  }

  render() {
  	const {
      type, heading, content, showNotification,
    } = this.props;
    showNotification ? this.animateNotification(0) : this.animateNotification(-70);
  	const { positionValue } = this.state;
  	return (
    <Animated.View style={[{ marginBottom: positionValue }, styles.wrapper]}>
      <View style={styles.errorMessageContainer}>
            <Text style={(type=='error')?styles.errorText:styles.successText}>
              {heading}
            </Text>
            <Text style={styles.notificationText}>
              {content}
            </Text>
      </View>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={this.closeNotification}
      >
        <Icon
          name="times"
          size={20}
          color={colors.lightGray}
        />
      </TouchableOpacity>
    </Animated.View>
  	);
  }
}

Notification.propTypes = {
  showNotification: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  heading: PropTypes.string,
  content: PropTypes.string,
  handleCloseNotification: PropTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    height: 70,
    padding: 10,
  },
  notificationContent: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  errorText: {
    color: colors.darkOrange,
    marginRight: 5,
    fontSize: 14,
    marginBottom: 2,
    fontWeight:'bold'    
  },
  successText: {
    color: colors.green02,
    marginRight: 5,
    fontSize: 14,
    marginBottom: 2,
    fontWeight:'bold'
  },
  notificationText:{
    marginBottom:5
  },
  errorMessage: {
    flexDirection: 'column',
    flex: 1,
    marginBottom: 2,    
    paddingBottom:3
  },
  errorMessageContainer: {
    flexDirection: 'column',
    flex: 1,
    marginBottom: 2,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 999,
  },
});
