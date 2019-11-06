import Immutable from 'seamless-immutable';
import {Types} from '../actions/authentication';
const initialState = Immutable({
  validateUser:false,
  loggedIn: false,
  authenticating: false,
  validatingUser: false,
  authUser: {},
  authenticationFailed:false,
  validateUserFailed:false,
  validateUserFailureMessage:''
});

const authentication = (state = initialState, { type, payload }) => {
  console.log("AUTH REDUCERS ACTION ",type);
  console.log("AUTH REDUCERS PAYLOAD",payload);
  switch (type) {
    case Types.AUTHENTICATION_REQUEST:
      return {
        ...state,
        loggedIn: false,
        authenticating: true,
        authenticationFailed:false,
        authenticationFailureMessage:''
      };

    case Types.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        authUser: payload.data,
        authenticating: false,
        authenticationFailed:false,
        authenticationFailureMessage:''
      };

    case Types.AUTHENTICATION_FAILURE:
      return {
        ...state,
        loggedIn: false,
        authenticating: false,
        authenticationFailed:true,
        authenticationFailureMessage:payload.data
      };
    case Types.VALIDATE_USER_REQUEST:
      return {
        ...state,
        loggedIn: false,
        validatingUser: true,
        validateUserFailed:false,
        validateUserFailureMessage:''
      };
    case Types.VALIDATE_USER_SUCCESS:
      return {
        ...state,
        validatingUser:false,
        authUser:payload.data,
        validateUserFailed:false,
        validateUserFailureMessage:''
      };
    
      case Types.VALIDATE_USER_FAILURE:
        return {
          ...state,
          loggedIn: false,
          validatingUser: false,
          validateUserFailed:true,
          validateUserFailureMessage:payload.data
        };
    default:
      return state;
  }
};

export {
  authentication
};
