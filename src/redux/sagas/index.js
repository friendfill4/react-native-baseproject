import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from '../actions/authentication';
import { Types as HomeTypes } from '../actions/home';

import { authenticate, validateUser } from './authentication';
import { getPostCategories } from './home';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.AUTHENTICATION_REQUEST, authenticate),
    takeLatest(AuthTypes.VALIDATE_USER_REQUEST, validateUser),
    takeLatest(HomeTypes.POST_CATEGORY_REQUEST, getPostCategories),
  ]);
}
