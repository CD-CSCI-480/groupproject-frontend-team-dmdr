import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import Categories from './components/categories'
import SortCategories from './components/sortCategories';
import HomeWorkouts from './components/homeWorkouts';

const Home = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: 6 }}>
        <View style={{ marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 30, marginTop: 10 }}>Let's Workout</Text>
          <TouchableOpacity>
            <Image source={require('../assets/icons/User.png')} style={{ height: 30, width: 30, marginHorizontal: 2 }} />
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 8 }}>
          <Categories />
        </View>
        <View style={{ marginBottom: 8 }}>
          <SortCategories />
        </View>

        <View style={{ marginBottom: 8 }}>
          <HomeWorkouts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default Home;