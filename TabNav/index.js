import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from '../screens/homepage';
import ImageSlider from '../screens/imgslider';
import rangeSlider from '../screens/rangeslider';

const Tab = createBottomTabNavigator();

function TabNav() {
  return (
     <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused
                    ? 'home'
                    : 'home-outline';
            } else if (route.name === 'Image Slider') {
                iconName = focused ? 'images' : 'image';
            } else if (route.name === 'Range Slider') {
                iconName = focused ? 'nutrition' : 'nutrition-sharp';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
        },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'purple',
        }}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Image Slider" component={ImageSlider} />
        <Tab.Screen name="Range Slider" component={rangeSlider} />
      </Tab.Navigator>
  );
}
export default TabNav