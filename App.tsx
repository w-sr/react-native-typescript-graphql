import React from 'react';
import { StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Toast from 'react-native-toast-message';
import 'react-native-gesture-handler';

import NavigatorWithCodePush from '@routes/routes';

enableScreens();

const client = new ApolloClient({
  uri: 'http://localhost:5000/',
  cache: new InMemoryCache(),
});

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="dark-content" />
      <NavigatorWithCodePush />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ApolloProvider>
  );
};

export default App;
