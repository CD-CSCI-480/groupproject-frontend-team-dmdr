import React , { useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  StatusBar, ScrollView,
  StyleSheet
} from 'react-native';
import data from '../components/experimentData';
import Accordion from '../components/FoodAccordion';
import {exportCals} from '../components/FoodAccordion';
import {SafeAreaView} from 'react-native-safe-area-context';
import CollapsibleView from '../components/CollapsibleView';
import Progressbar from 'react-native-progress/Bar';

let cals = exportCals

console.log("Nutrition", exportCals)

const Nutrition = () =>{
  useEffect(() => {
  })
  
  return (
    
    <SafeAreaView style={styles.container} edges={['bottom', 'right', 'left']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style = {styles.container2}>
          <Text style = {styles.textStuff}>
            {exportCals}
          </Text>
          <Text style = {{fontSize: 20, textAlign: 'center', marginBottom: 10}}>
            Calorie Goal!
          </Text>
          <Text style = {{fontSize: 25, textAlign: 'center', marginBottom: 5, marginHorizontal:30 }}>
            450
          </Text>
          <Text style = {{fontSize: 20, textAlign: 'center', marginBottom: 10, marginHorizontal:30 }}>
            Calories Eaten!
          </Text>
          <Progressbar progress = {0.276} height = {20} width = {408} color = 'rgba(255, 0, 0, 1)'/>
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
    backgroundColor: '#D3D3D3',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#000000',
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
    backgroundColor: '#00000',
  },
  textContent: {
    fontSize: 14,
    color: 'black',
  },
});