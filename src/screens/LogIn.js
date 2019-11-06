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
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../redux/actions';
import { Creators as AuthenticationCreators } from '../redux/actions/authentication';
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';
import Loader from '../components/Loader';
import NavBarButton from '../components/buttons/NavBarButton';
import styles from './styles/LogIn';
import {getToken} from '../utils/storage';

class LogIn extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <NavBarButton
      handleButtonPress={() => navigation.navigate('ForgotPassword')}
      location="right"
      color={colors.white}
      text="Forgot Password"
    />,
    headerLeft: <NavBarButton
      handleButtonPress={() => navigation.goBack()}
      location="left"
      icon={<Icon name="angle-left" color={colors.white} size={30} />}
    />,
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    headerTintColor: colors.white,
  });

  constructor(props) {
    super(props);
    this.state = {
      validEmail: true,
      validPassword: true,
      emailAddress: 'acharyajay001@gmail.com',
      password: '12345',
      authenticating: false,
      authenticationFailed:false,
      notificationMessage:'',
      showNotification:false
    };
    console.log("Token");
    getToken().then((token)=>{
      if (token) {
        console.log("Token");
        this.setState({showNotification:true,notificationMessage:'Already logged in'})
      } else {
        this.setState({showNotification:true,notificationMessage:'Log in to continue'})
      }
      
    })
    

    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
  }
  handleNextButton() {
    const { authenticate } = this.props;
    const { emailAddress, password } = this.state;
      authenticate(emailAddress, password);
  }

  handleCloseNotification() {
    this.setState({ showNotification: false });
    this.setState({ authenticationFailed: false });
  }

  componentWillReceiveProps(nextProps) {
    console.log("New Props Received To Login Screen",nextProps);
    if (nextProps.loggedIn) {
      this.props.navigation.navigate('home');
    }
    this.setState({loggedIn: nextProps.loggedIn})
    this.setState({showNotification: nextProps.authenticationFailed})
    this.setState({authenticationFailed: nextProps.authenticationFailed})
    this.setState({notificationMessage: nextProps.authenticationFailureMessage})
    this.setState({authenticating: nextProps.authenticating})
  }

  handleEmailChange(email) {
    // eslint-disable-next-line
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validEmail } = this.state;
    this.setState({ emailAddress: email });
    this.setState({ validEmail: true });
    // if (!validEmail) {
    //   if (emailCheckRegex.test(email)) {
    //     this.setState({ validEmail: true });
    //   }
    // } else if (!emailCheckRegex.test(email)) {
    //   this.setState({ validEmail: false });
    // }
  }

  handlePasswordChange(password) {
    const { validPassword } = this.state;
    this.setState({ password });
    this.setState({ validPassword: true });
    // if (!validPassword) {
    //   if (password.length > 4) {
    //     // Password has to be at least 4 characters long
    //     this.setState({ validPassword: true });
    //   }
    // } else if (password <= 4) {
    //   this.setState({ validPassword: false });
    // }
  }

  toggleNextButtonState() {
    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) {
      return false;
    }
    return true;
  }

  render() {
    const {
      showNotification,notificationMessage,authenticating,authenticationFailed,
      validEmail, validPassword,
    } = this.state;
    const background = !authenticationFailed ? colors.green01 : colors.darkOrange;
    const notificationMarginTop = showNotification ? 20 : 0;
    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: background }, styles.wrapper]}
        behavior="padding"
      >
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField
              defaultValue={this.state.emailAddress}
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              customStyle={{ marginBottom: 30 }}
              onChangeText={this.handleEmailChange}
              showCheckmark={validEmail}
              autoFocus
            />
            <InputField
              defaultValue={this.state.password}
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
              onChangeText={this.handlePasswordChange}
              showCheckmark={validPassword}
            />
          </ScrollView>
          <NextArrowButton
            handleNextButton={this.handleNextButton}
            disabled={this.toggleNextButtonState()}
          />
        </View>
        <Loader
          modalVisible={authenticating}
          animationType="fade"
        />
        <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
          <Notification
            showNotification={showNotification}
            handleCloseNotification={this.handleCloseNotification}
            type="error"
            heading="Error"
            content={notificationMessage}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("<MAP>",state);
  return {
    loggedIn:state.authentication.loggedIn,
    authenticating:state.authentication.authenticating,
    authenticationFailed:state.authentication.authenticationFailed,
    authenticationFailureMessage:state.authentication.authenticationFailureMessage
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({},ActionCreators,AuthenticationCreators), dispatch);
//const mapDispatchToProps = dispatch => bindActionCreators(AuthenticationCreators, dispatch);
LogIn.propTypes = {
  authenticate:PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
