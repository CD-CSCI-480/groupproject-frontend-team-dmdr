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
import {totalCals} from '../Components/FoodAccordion';
import {SafeAreaView} from 'react-native-safe-area-context';
import CollapsibleView from '../Components/CollapsibleView';
import Progressbar from 'react-native-progress/Bar';

console.log("Nutrition", totalCals)

const Nutrition = () =>{
  return (
    
    <SafeAreaView style={styles.container} edges={['bottom', 'right', 'left']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style = {styles.container2}>
          <Text style = {styles.textStuff}>
            {totalCals}
          </Text>
          <Text style = {{fontSize: 20, textAlign: 'center', marginBottom: 10}}>
            Calorie Goal!
          </Text>
          <Text style = {{fontSize: 25, textAlign: 'center', marginBottom: 5, marginHorizontal:30 }}>
            300
          </Text>
          <Text style = {{fontSize: 20, textAlign: 'center', marginBottom: 10, marginHorizontal:30 }}>
            Calories Eaten!
          </Text>
          <Progressbar progress = {.46875} height = {20} width = {408} style = {{}}/>
        </View>
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
  container2: {
    backgroundColor: '#E3EDFB',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#0F56B3',
    overflow: 'hidden',
    textAlign: 'center',
  },
  textStuff:{
    marginTop: 10,
    textAlign: 'center',
    marginBottom:5,
    fontSize: 30,
  },
  barStuff: {
    alignContent: 'center',
  },
  textTitle: {
    fontSize: 16,
    color: 'black',
  },
  titleContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  content: {
    padding: 20,
    backgroundColor: '#D6E1F0',
  },
  textContent: {
    fontSize: 14,
    color: 'black',
  },
});