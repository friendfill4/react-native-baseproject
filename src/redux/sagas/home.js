import { call, put } from 'redux-saga/effects';
import { Creators as HomeActions } from '../actions/home';
import {fetchPostCategories,fetchHomeSections,fetchPosts} from '../../services/home';
import {customException} from '../../utils/customException';

export function* getPostCategories(action) {
  try {
      const response = yield call(fetchPostCategories,action.payload);
      const data =response.data;
      console.log("Reso",data);
      if (data.data && data.data.length>0) {
        yield put(HomeActions.fetchPostCategoriesSuccess(data.data));
      } else {
        throw customException("Internal Error");
      }
  } catch (err) {
    if (err.response) {
      yield put(HomeActions.fetchPostCategoriesFailure(err.response.data.message));
    } else {
      yield put(HomeActions.fetchPostCategoriesFailure(err.message));
    }
  }
}

export function* getHomeSections(action) {
  try {
      const response = yield call(fetchHomeSections,action.payload);
      const data =response.data;
      if (data.data && data.data.length>0) {
        yield put(HomeActions.fetchHomeSectionsSuccess(data.data));
      } else {
        throw customException("Internal Error");
      }
  } catch (err) {
    if (err.response) {
      yield put(HomeActions.fetchHomeSectionsFailure(err.response.data.message));
    } else {
      yield put(HomeActions.fetchHomeSectionsFailure(err.message));
    }
  }
}

export function* getPosts(action) {
  try {
      const response = yield call(fetchPosts,action.payload);
      const data =response.data;
      if (data.data && data.data.length>0) {
        yield put(HomeActions.fetchPostsSuccess(data.data));
      } else {
        throw customException("Internal Error");
      }
  } catch (err) {
    if (err.response) {
      yield put(HomeActions.fetchPostsFailure(err.response.data.message));
    } else {
      yield put(HomeActions.fetchPostsFailure(err.message));
    }
  }
}
