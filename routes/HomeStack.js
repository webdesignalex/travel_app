import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardPage from '../screens/OnBoardPage'
import HomePage from '../screens/HomePage';
import DetailPage from '../screens/DetailPage'

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="OnBoard" component={OnBoardPage} /> 
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
    </Stack.Navigator>
    
  )
}