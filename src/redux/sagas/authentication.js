import { call, put } from 'redux-saga/effects';

import { Creators as AuthActions } from '../actions/authentication';
import {doAthentication,getUser} from '../../services/auth';
import {saveToken, getToken} from '../../utils/storage';
import {customException} from '../../utils/customException';

export function* authenticate(action) {
  try {
      const response = yield call(doAthentication,action.payload);
      console.log(response);
      const data =response.data.data;
      if (data.access_token && data.access_token.length > 0) {
        const isSuccess = yield call(saveToken,data.access_token);
        console.log("Is Token Saved?",isSuccess);
        if (isSuccess) {
          token = yield call(getToken);
          console.log(token);
          yield put(AuthActions.authenticationSuccess(data.user));
        } else {
          throw customException("Internal Error");
        }
    } else {
      throw customException("Internal Error");
    }
  } catch (err) {
    console.log(err);
    if (err.response) {
      yield put(AuthActions.authenticationFailure(err.response.data.message));
    } else {
      yield put(AuthActions.authenticationFailure(err.message));
    }
  }
}

export function* validateUser(action) {
  try {
      const response = yield call(getUser,action.payload);
      console.log(response);
      const data =response.data.data;
      if (data) {
        yield put(AuthActions.validateUserSuccess(data));
    } else {
      throw customException("Not valid user");
    }
  } catch (err) {
    console.log(err);
    if (err.response) {
      yield put(AuthActions.validateUserFailure(err.response.data.message));
    } else {
      yield put(AuthActions.validateUserFailure(err.message));
    }
  }
}
