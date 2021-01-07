import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './src/screens/SearchScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
