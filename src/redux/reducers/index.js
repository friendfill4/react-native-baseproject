import { combineReducers } from 'redux';
import * as Navigation from './navigation';
import * as Authentication from './authentication';
import * as Home from './home';

export default combineReducers(Object.assign(
  Navigation,
  Authentication,
  Home
));
