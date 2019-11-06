/**
 * IAbroad App
 * @author: Jay
 * @Url: https://www.friendfill.com
 */

import { StatusBar } from 'react-native';
import AppRouteConfigs from '../../navigators/AppRouteConfigs';
const firstAction = AppRouteConfigs.router.getActionForPathAndParams('Splash');
const initialNavState = AppRouteConfigs.router.getStateForAction(firstAction);
const nav = (state = initialNavState, action) => { 
  const nextState = AppRouteConfigs.router.getStateForAction(action, state);

  if (action.routeName === 'TurnOnNotifications' || action.routeName === 'LoggedIn') {
    StatusBar.setBarStyle('dark-content', true);
  }

  return nextState || state;
};

export {
  nav
};
