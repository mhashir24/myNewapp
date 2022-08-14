
import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground

} from 'react-native';
import google from '../../assets/google1.jpg';
import facebook from '../../assets/fb.png';
import road from '../../assets/road.jpg';




const HomePage = () => {
  return (



    <View style={{ flex: 1, borderWidth: 1 }}>

      <ImageBackground
        source={road}
        style={{
          zIndex: 1, opacity: 20,
          width: '100%', // applied to Image
          height: '100%'
        }}
        imageStyle={{
          resizeMode: 'cover' // works only here!
        }}
      >


        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 33, color: 'white', flexWrap: 'wrap' }}>
            {'Start making awesome'}
          </Text>

          <Text style={{ fontWeight: 'bold', fontSize: 33, color: 'white', flexWrap: 'wrap' }}>
            {'edits!'}
          </Text>

          <TouchableOpacity>
            <View style={{ borderRadius: 5, width: 250, backgroundColor: '#ffa500', padding: 15, marginTop: 20 }}>
              <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
                {'CREATE AN ACCOUNT'}
              </Text>
            </View>
          </TouchableOpacity>

          <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 20, color: 'white' }}>
            {'OR'}
          </Text>

          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View>
              <Image
                style={{ width: 50, height: 50, borderRadius: 30 }}
                source={google}
              />
            </View>

            <View style={{ marginLeft: 30 }}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 30 }}
                source={facebook}
              />
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ marginTop: 20, fontSize: 11, color: 'white' }}>
              {'By registering you agree to our'}

              <Text style={{ fontWeight: 'bold', fontSize: 13 }}>
                {' TERMS OF USE'}
              </Text>
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginTop: 20, justifyContent: 'center', fontSize: 14, color: 'white' }}>
              {'ALREADY HAVE AN ACCOUNT?'}

              <Text style={{ fontWeight: 'bold', color: '#ffa500' }}>
                {'  SIGN IN'}
              </Text>
            </Text>
          </View>



        </View>



      </ImageBackground>
    </View>





  );
};











export default HomePage;
