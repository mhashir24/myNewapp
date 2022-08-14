
import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import Slider from 'react-native-slider';
import blowimg from '../../assets/battery.png';
import bchimg from '../../assets/batterych.png';
import psimg from '../../assets/powersupply.png';
import wmimg from '../../assets/windmill.png';
import ncimg from '../../assets/nuclear.png';
import foodimg from '../../assets/food.png';
import nutimg from '../../assets/nutrition.png';
import meatimg from '../../assets/meat.png';
import cowimg from '../../assets/cow.jpg';
import meatdimg from '../../assets/meat2.jpg';




const rangeSlider = () => {
  const [rangeslider, setRangeslider] = useState()
  const renderThumb = useCallback(() => <Thumb/>, []);
const renderRail = useCallback(() => <Rail/>, []);
const renderRailSelected = useCallback(() => <RailSelected/>, []);
const renderLabel = useCallback(value => <Label text={value}/>, []);
const renderNotch = useCallback(() => <Notch/>, []);
const handleValueChange = useCallback((low, high) => {
  setLow(low);
  setHigh(high);
}, []);    
  return (
    

    <View style={{ flex: 1, borderWidth: 1 }}>
      <View>

        <View style={{ marginTop: 30, paddingHorizontal: 30, marginBottom: 30, flexDirection: 'row' }}>
          <Image style={{ width: 30, height: 30 }}
            source={psimg}
          />

          <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
              {'Power Supply'}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: -15, paddingHorizontal: 10, justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>
              {'Renewable Energy'}
            </Text>
          </View>

          <View>
            <Text style={{ fontWeight: 'bold' }}>
              {'Yes'}
            </Text>
          </View>
        </View>

        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', padding: 10,
          marginHorizontal: 10
        }}>

          <View style={{ justifyContent: 'center', padding: 5 }}>
            <Image style={{ width: 25, height: 25 }}
              source={wmimg}
            />
          </View>

          {/* <View style={{ flex: 1 }}>
            <Slider
              value={rangeslider}
              thumbStyle={{ backgroundColor: '#98fb98', height: 12, width: 12 }}
              minimumTrackTintColor={'#98fb98'}
              maximumTrackTintColor={'#d3d3d3'}
              onChangeValue={(value) => setRangeslider(value)}
            />
          </View> */}

<Slider
  style={{width:200, height:30}}
  min={0}
  max={100}
  step={0.1 }
  floatingLabel
  enableRange = {true}
  renderThumb={renderThumb}
  renderRail={renderRail}
  renderRailSelected={renderRailSelected}
  renderLabel={renderLabel}
  renderNotch={renderNotch}
  onValueChanged={handleValueChange}
/>

          <View style={{ justifyContent: 'center', padding: 5 }}>
            <Image style={{ width: 25, height: 25 }}
              source={ncimg}
            />
          </View>

        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: -15, paddingHorizontal: 10, justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontWeight: 'bold' }}>
            {'Power Consumption'}
          </Text>
        </View>

        <View>
          <Text style={{ fontWeight: 'bold' }}>
            {'1554.1 kWh/year'}
          </Text>
        </View>
      </View>

      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', padding: 10,
        marginHorizontal: 10
      }}>

        <View style={{ justifyContent: 'center', padding: 5 }}>
          <Image style={{ width: 25, height: 25 }}
            source={blowimg}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Slider
            value={rangeslider}
            thumbStyle={{ backgroundColor: '#98fb98', height: 12, width: 12 }}
            minimumTrackTintColor={'#98fb98'}
            maximumTrackTintColor={'#d3d3d3'}
            onChangeValue={(value) => setRangeslider(value)}
          />
        </View>

        <View style={{ justifyContent: 'center', padding: 5 }}>
          <Image style={{ width: 25, height: 25 }}
            source={bchimg}
          />
        </View>
      </View>




      <View>

        <View style={{ marginTop: 30, paddingHorizontal: 30, marginBottom: 30, flexDirection: 'row' }}>
          <Image style={{ width: 30, height: 30 }}
            source={foodimg}
          />

          <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
              {'Eating Habits'}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: -15, paddingHorizontal: 10, justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>
              {'Nutrition'}
            </Text>
          </View>

          <View>
            <Text style={{ fontWeight: 'bold' }}>
              {'Everything'}
            </Text>
          </View>
        </View>

        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', padding: 10,
          marginHorizontal: 10
        }}>

          <View style={{ justifyContent: 'center', padding: 5 }}>
            <Image style={{ width: 25, height: 25 }}
              source={nutimg}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Slider
              value={rangeslider}
              thumbStyle={{ backgroundColor: '#98fb98', height: 12, width: 12 }}
              minimumTrackTintColor={'#98fb98'}
              maximumTrackTintColor={'#d3d3d3'}
              onChangeValue={(value) => setRangeslider(value)}
            />
          </View>

          <View style={{ justifyContent: 'center', padding: 5 }}>
            <Image style={{ width: 25, height: 25 }}
              source={meatimg}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: -15, paddingHorizontal: 10, justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>
              {'Meet'}
            </Text>
          </View>

          <View>
            <Text style={{ fontWeight: 'bold' }}>
              {'0.3 kg/week'}
            </Text>
          </View>
        </View>

        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', padding: 10,
          marginHorizontal: 10
        }}>

          <View style={{ justifyContent: 'center', padding: 5 }}>
            <Image style={{ width: 25, height: 25 }}
              source={cowimg}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Slider
              value={rangeslider}
              thumbStyle={{ backgroundColor: '#98fb98', height: 12, width: 12 }}
              minimumTrackTintColor={'#98fb98'}
              maximumTrackTintColor={'#d3d3d3'}
              onChangeValue={(value) => setRangeslider(value)}
            />
          </View>

          <View style={{ justifyContent: 'center', padding: 5 }}>
            <Image style={{ width: 25, height: 25 }}
              source={meatdimg}
            />
          </View>

        </View>
      </View>

    </View>



  );
};











export default rangeSlider;
