import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator,StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Text,TouchableOpacity } from 'react-native';
import modelScreen from '../screens/modalScreen'
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import modalScreen from '../screens/modalScreen';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      
      <Stack.Navigator mode="modal"  screenOptions={{ headerShown: true,headerTitle:'Start Post',headerStyle:{ backgroundColor: '#0E76A8',},headerRight:()=>
        
        <TouchableOpacity style={{right:2}}><Text style={{fontSize:35}}>Post</Text></TouchableOpacity>
         ,}} >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen  name="modal" component={modalScreen} options={{animationEnabled:true,gestureDirection:'vertical'}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

