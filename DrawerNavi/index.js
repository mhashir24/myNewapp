import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNav from '../TabNav';
import HomePage from '../screens/homepage';
import ImageSlider from '../screens/imgslider';
import rangeSlider from '../screens/rangeslider';

const Drawer = createDrawerNavigator();

function DrawerNavi() {
  return (
    <Drawer.Navigator initialRouteName="TabNav"
    drawerStyle={{backgroundColor:'pink'}} >
      <Drawer.Screen
        name="TabNav"
        component={TabNav}
        options={{ drawerLabel: 'TabNav' }}
      />
       <Drawer.Screen
        name="Feed"
        component={HomePage}
        options={{ drawerLabel: 'HomePage' }}
      />
      <Drawer.Screen
        name="ImageSlider"
        component={ImageSlider}
        options={{ drawerLabel: 'ImageSlider' }}
      />
      <Drawer.Screen
        name="rangeSlider"
        component={rangeSlider}
        options={{ drawerLabel: 'rangeSlider' }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavi