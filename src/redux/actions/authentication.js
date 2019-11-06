/**
 * IAbroad App
 * @author: Jay
 * @Url: https://www.friendfill.com
 */


export const Types = {
  AUTHENTICATION_REQUEST: 'auth/AUTHENTICATION_REQUEST',
  AUTHENTICATION_SUCCESS: 'auth/AUTHENTICATION_SUCCESS',
  AUTHENTICATION_FAILURE: 'auth/AUTHENTICATION_FAILURE',
  VALIDATE_USER_REQUEST: 'auth/VALIDATE_USER_REQUEST',
  VALIDATE_USER_SUCCESS: 'auth/VALIDATE_USER_SUCCESS',
  VALIDATE_USER_FAILURE: 'auth/VALIDATE_USER_FAILURE',
};

export const Creators = {

  authenticate: (email,password) => ({
    type: Types.AUTHENTICATION_REQUEST,
    payload: { email, password},
  }),

  authenticationSuccess: data => ({
    type: Types.AUTHENTICATION_SUCCESS,
    payload: { data },
  }),

  authenticationFailure: (data) => ({
    type: Types.AUTHENTICATION_FAILURE,
    payload: { data }
  }),

  validateUser: () => ({
    type: Types.VALIDATE_USER_REQUEST,
    payload: {},
  }),
  validateUserSuccess: data => ({
    type: Types.VALIDATE_USER_SUCCESS,
    payload: { data },
  }),

  validateUserFailure: (data) => ({
    type: Types.VALIDATE_USER_FAILURE,
    payload: { data }
  }),
};
