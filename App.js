// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movie from './src/Movie'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Movie">
        <Stack.Screen name="Movie" component={Movie} options={{headerShown: false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;