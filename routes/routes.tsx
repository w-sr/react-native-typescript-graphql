import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import codePush from 'react-native-code-push';

import 'react-native-gesture-handler';

import Routes from '@routes';
import { AuthContext } from '../context/authContext';
import { Login, Welcome, Register, ToDoList, ToDoListptions, ToDoListItem, ToDoListItemOptions } from '@screens';

enableScreens();

const MainStack = createStackNavigator();
const RegistrationStack = createStackNavigator();
const RootStack = createStackNavigator();

const Navigator = (): JSX.Element => {
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            isLoggedin: true,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isLoggedin: false,
          };
      }
    },
    {
      isLoggedin: false,
    },
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async () => dispatch({ type: 'SIGN_IN' }),
      signOut: async () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async () => dispatch({ type: 'SIGN_IN' }),
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          {((): JSX.Element => {
            if (state.isLoggedin) {
              return (
                <>
                  <RootStack.Screen name={Routes.MainStack}>
                    {(): JSX.Element => (
                      <MainStack.Navigator screenOptions={{ headerShown: true }}>
                        <MainStack.Screen name={Routes.ToDoList} component={ToDoList} options={ToDoListptions} />
                        <MainStack.Screen
                          name={Routes.ToDoListItem}
                          component={ToDoListItem}
                          options={ToDoListItemOptions}
                        />
                      </MainStack.Navigator>
                    )}
                  </RootStack.Screen>
                </>
              );
            } else {
              return (
                <>
                  <RootStack.Screen name={Routes.Welcome} component={Welcome} />
                  <RootStack.Screen name={Routes.RegistrationStack}>
                    {(): JSX.Element => (
                      <RegistrationStack.Navigator
                        // mode="modal"
                        // headerMode="none"
                        screenOptions={{ headerShown: false }}>
                        <RegistrationStack.Screen name={Routes.Login} component={Login} />
                        <RegistrationStack.Screen name={Routes.Registration} component={Register} />
                      </RegistrationStack.Navigator>
                    )}
                  </RootStack.Screen>
                </>
              );
            }
          })()}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const NavigatorWithCodePush = __DEV__
  ? Navigator
  : codePush({
      checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
      updateDialog: {
        mandatoryContinueButtonLabel: 'Continue',
        mandatoryUpdateMessage: 'An update is avaialble that must be installed',
        optionalIgnoreButtonLabel: 'Ignore',
        optionalInstallButtonLabel: 'Install',
        optionalUpdateMessage: 'An update is available. Would you like to install it?',
        title: 'Update available.',
      },
      mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
      installMode: codePush.InstallMode.ON_NEXT_RESUME,
    })(Navigator);

export default NavigatorWithCodePush;
