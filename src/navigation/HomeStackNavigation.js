import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTES, INITIALROUTES } from '../config';
import injectScreenDimensions from '../components/injectScreenDimensions';
import CustomHeader from '../components/CustomHeader';
import HomeScreen from '../components/screens/HomeScreen';
import SecondScreen from '../components/screens/SecondScreen';

const Stack = createStackNavigator();

const HomeStackNavigation = ({ dimensions }) => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={INITIALROUTES.HOMESTACK}
      headerMode="screen"
      screenOptions={{
        header: props => <CustomHeader {...props} />,
        /**
         * Disable gestureEnabled for android now, see https://github.com/react-navigation/react-navigation/issues/7848
         * Enable again if bug is fixed
         */
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        gestureResponseDistance: {
          horizontal: dimensions.width
        },
        cardStyleInterpolator: ({ current, next, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                    extrapolate: 'clamp'
                  })
                }
              ]
            },
            overlayStyle: {
              opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5]
              })
            }
          };
        }
      }}
    >
      <Stack.Screen name={ROUTES.HOMESTACK.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.HOMESTACK.SECOND} component={SecondScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default injectScreenDimensions(HomeStackNavigation);
