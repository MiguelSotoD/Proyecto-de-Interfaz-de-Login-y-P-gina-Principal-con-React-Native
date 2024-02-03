import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import YourApp from './YourApp';
import App from './App';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="YourApp" headerMode="none">
        <Stack.Screen name="YourApp" component={YourApp} />
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
