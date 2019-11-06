/**
 * IAbroad App
 * @author: Jay
 * @Url: https://www.friendfill.com
 */

import React, { Component } from 'react';
import { StatusBar, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Root, configureStore} from './src/navigators/AppNavigator';
import { NETWORK_INTERFACE } from './src/config';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten';
console.disableYellowBox = true;
StatusBar.setBarStyle('light-content', true);

const client = new ApolloClient({
  link: new HttpLink({ uri: NETWORK_INTERFACE }),
  cache: new InMemoryCache()
})

class App extends Component {
  render() {
  	return (
      <Provider store={configureStore()}>
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <ApolloProvider client={client}>
          <Root />
        </ApolloProvider>
      </ApplicationProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);

export default App;