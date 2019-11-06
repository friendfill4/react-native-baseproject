/**
 * IAbroad App
 * @author: Jay
 * @Url: https://www.friendfill.com
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {StyleSheet,Image} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../redux/actions';
import { Creators as AuthenticationCreators } from '../redux/actions/authentication';
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import {getToken} from '../utils/storage';

class Splash extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: colors.white,
  });

  constructor(props) {
    super(props);
    this.state ={
        loggedIn:false,
        validatingUser:false,
        validateUserFailed:false
    }
    
    getToken().then((token)=>{
        if (token) {
          console.log("Token Saved");
          //this.props.validateUser();
          props.navigation.navigate('LoggedIn');
        } else {
          console.log("No Token Saved");
          props.navigation.navigate('LogIn');
        }
      })
    
  }
  componentWillReceiveProps(nextProps) {
    console.log("New Props Received To Splash Screen",nextProps);
    if (nextProps.authUser) {
        nextProps.navigation.navigate('LoggedIn');
    }
    this.setState({loggedIn: nextProps.loggedIn})
    this.setState({validateUserFailed: nextProps.validateUserFailed})
    this.setState({validatingUser: nextProps.validatingUser})
    
  }
  render() {
     return (
      <Image
        style={styles.splashimage}
        source={require('../img/splash.png')}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser:state.authentication.authUser,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({},ActionCreators,AuthenticationCreators), dispatch);
Splash.propTypes = {
  validateUser:PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

const styles = StyleSheet.create({
  splashimage: {
    width: '100%',
    height: '100%',
  },
});
