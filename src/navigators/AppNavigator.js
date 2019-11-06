
import React from 'react';
import Reactotron from 'reactotron-react-native';
import { compose, createStore, applyMiddleware } from 'redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { connect } from 'react-redux';
import AppRouteConfigs from './AppRouteConfigs';
import reducer from '../redux/reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from '../redux/sagas';
import '../config/ReactotronConfig';

const sagaMonitor = __DEV__ ? Reactotron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const App = reduxifyNavigator(AppRouteConfigs, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const loggerMiddleware = createLogger({ predicate: () => __DEV__ });

const configureStore = (initialState) => {
  const middlewares = [ middleware,thunkMiddleware,loggerMiddleware,sagaMiddleware];
  const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
  const store = createAppropriateStore(reducer, applyMiddleware(...middlewares));
  sagaMiddleware.run(sagas);
  return store;
};

const Root = () => <AppWithNavigationState />;

export {
  configureStore,
  Root,
};
