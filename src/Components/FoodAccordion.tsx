import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react'
import {Category} from '../Components/experimentData';
import Animated, {
  useAnimatedRef,
  useSharedValue,
  useAnimatedStyle,
  runOnUI,
  measure,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import Chevron from './Chevron';
import Checkbox from 'expo-checkbox';
//import AccordionNested from './FoodInformationAccordion';

 //total calories in meal planner

let exportCals = 0;
export {exportCals};

type Props = {
  value: Category;
  type: string;
};




const Accordion = ({value, type}: Props) => {
  const [totalCals, setTotalCals] = useState(0);
  const [isChecked, setChecked] = useState(false);
  const listRef = useAnimatedRef();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0),
  );


  var cals = value.contentNested.reduce(function(prev, cur){
    return prev + cur.caloric;
  },0)

  value.calories = cals
  exportCals += value.calories


  console.log(exportCals)

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }));

  return (
    <View style={styles.container}>
      
      <Pressable
        onPress={() => {
          if (heightValue.value === 0) {
            runOnUI(() => {
              'worklet';
              heightValue.value = withTiming(measure(listRef)!.height);
            })();
          } else {
            heightValue.value = withTiming(0);
          }
          open.value = !open.value;
        }}
        style={styles.titleContainer}>
          <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={isChecked ? '#FF0000' : undefined}/>
          {/*This sets the title of the accordion/expandablex */}
        <Text style={styles.textTitle}>{value.title} - {value.calories} Calories</Text> 
        <Chevron progress={progress} />
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View style={styles.contentContainer} ref={listRef}>
          {/**
          {type === 'regular' &&
            value.content.map((v, i) => {
              return (
               
                <View key={i} style={styles.content}>
                  <Text style={styles.textContent}>{v} - {i}</Text>
                </View>
              );
            })}
          */}
          {type === 'nested' && (
            <>
            {/**
              <View style={styles.content}>
                <Text style={styles.textContent}>{value.content}</Text>
              </View>
          */}
              {value.contentNested.map((val, ind) => {
                return (
                  <View key={ind} style={styles.content}>
                  <Text style={styles.textContent}>{val.title} - {val.content} - {val.caloric} Cals </Text>
                </View>
                );
              })}
            </>
          )}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D3D3',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#000000',
    overflow: 'hidden',
  },
  textTitle: {
    fontSize: 20,
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
    fontSize: 17,
    color: 'black',
  },
  checkbox: {
    marginTop: 1,
    alignItems: 'center',
  },
});
