import React , { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StatusBar, ScrollView,
  StyleSheet
} from 'react-native';
import data from '../Components/experimentData';
import Accordion from '../Components/FoodAccordion';
import {SafeAreaView} from 'react-native-safe-area-context';
import CollapsibleView from '../Components/CollapsibleView';

const Nutrition = () =>{
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'right', 'left']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((value, index) => {
          return <Accordion value={value} key={index} type={value.type} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Nutrition;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});