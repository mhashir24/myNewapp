import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from './TabNav';
import DrawerNavi from './DrawerNavi';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavi"
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavi" component={DrawerNavi} />
      </Stack.Navigator> 
    </NavigationContainer>

    
    

  );
};




export default App;
