
import React, { useState } from 'react';
import Carousel from 'react-native-snap-carousel';

import {
    View,
    Dimensions,
    Text,
    Image,
    ImageBackground
} from 'react-native';
let width = Dimensions.get('screen').width

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import yourImage from '../../assets/wallpaper.jpg';


const data = [
    {
        title1: 'Beautiful Arizona Scenery',
        title2: 'Spend your Quality Time',
        img: img1
    },
    {
        title1: 'Luxirious Maldives Scenery',
        title2: 'Spend your Quality Time',
        img: img2
    },
    {
        title1: 'Amazing Amazon Scenery',
        title2: 'Spend your Quality Time',
        img: img3
    },
    {
        title1: 'Fascinating NaigraFall Scenery',
        title2: 'Spend your Quality Time',
        img: img4
    }
]





const ImageSlider = () => {
    return (

        <View style={{ flex: 1, borderWidth: 1, backgroundColor: 'white' }}>

            <ImageBackground
                source={yourImage}
                style={{
                    zIndex: 1, opacity: 20,
                    width: '100%', // applied to Image
                    height: '100%'
                }}
                imageStyle={{
                    resizeMode: 'cover' // works only here!
                }}
            >

                <Carousel
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ paddingTop: 70, marginLeft: 10 }}>
                                <View style={{
                                    backgroundColor: '#f5f5dc', padding: 5,
                                    alignItems: 'center', borderRadius: 20, marginRight: 20
                                }}>
                                    <Image style={{ width: 300, height: 250, marginTop: 10, borderRadius: 20 }}
                                        source={item.img}
                                    />

                                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>
                                        {item.title1}
                                    </Text>

                                    <Text>
                                        {item.title2}
                                    </Text>
                                </View>
                            </View>
                        )
                    }}
                    sliderWidth={width}
                    itemWidth={width}



                />
            </ImageBackground>

        </View>



    );
};











export default ImageSlider;
