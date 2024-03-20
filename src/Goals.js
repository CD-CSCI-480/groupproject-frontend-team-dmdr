import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {categoriesData}from "../src/constants/index";

export const CardWithProgressTracker = ({ title, progress }) => {
  return (
    <View style={{ backgroundColor: '#ffffff', padding: 20, marginTop: 20, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderColor: '#CCCCCC', borderWidth: 1 }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
        <Text style={{ fontSize: 14, color: '#666666' }}> 12 Exercises Left</Text>
      </View>
      <View style={{ position: 'absolute', right: 15, top: 20 }}>
      <AnimatedCircularProgress
  size={50}
  width={3}
  fill={progress*100}
  tintColor='#e32f45'
  backgroundColor="#3d5875">
  {
    (fill) => (
      <Text style={{fontWeight: 'bold'}}>
        { progress*100 }%
      </Text>
    )
  }
</AnimatedCircularProgress>
      </View>
    </View>
  );
};

const Goals = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: 6 }}>
        <View style={{ marginTop: 10, marginHorizontal: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image source={require('../assets/icons/User.png')} style={{ height: 30, width: 30, marginHorizontal: 2 }} />
              </TouchableOpacity>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ color: 'black', fontSize: 10 }}>Welcome Back</Text>
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>User Name</Text>
              </View>
            </View>

            <TouchableOpacity>
              <Image source={require('../assets/icons/Notification.png')} style={{ height: 30, width: 30, marginHorizontal: 2 }} />
            </TouchableOpacity>
          </View>
          <View>
          <CardWithProgressTracker title="Exercise 1" progress={0.3}/>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Today's Activity</Text>
            <TouchableOpacity style={{ marginLeft: 190, marginTop: 2 }}>
              <Text style={{ fontSize: 12 }}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Goals;