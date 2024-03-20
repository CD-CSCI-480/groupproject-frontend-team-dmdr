import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { progressData, exercises } from './constants';

export const ProgressTracker = ({ title, description, progress }) => {
  return (
    <View style={{borderColor: '#CCCCCC'}}>
    <View style={{ backgroundColor: '#ffffff', padding:10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View>
        <Text style={{ fontSize: 14,  marginBottom: 10, color: '#666666' }}>{title}</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}> {description}</Text>
      </View>
        <View style={{ width: 80, alignItems: 'center' }}>
          <AnimatedCircularProgress
            size={40}
            width={2}
            fill={progress}
            tintColor="#00e0ff"
            backgroundColor="#3d5875"
            rotation={0}
            lineCap="round"
            duration={1000}
        
          >
            {(fill) => (
              <Text style={{ marginTop: 5 }}>{`${Math.round(fill)}%`}</Text>
            )}
          </AnimatedCircularProgress>
        </View>
      </View>
    </View>
  );
};

const ProgressTrackerCard = ({ progressData }) => {
  return (
    <View style={{ borderColor: '#CCCCCC', borderWidth: 3, borderRadius: 10, overflow: 'hidden' }}>
    <View style={{ backgroundColor: '#ffffff', padding: 2 }}>
      {progressData.map((data, index) => (
        <ProgressTracker key={index} title={data.title} description={data.description} progress={data.progress} />
      ))}
    </View>
    </View>
  );
};

export const CardWithProgressTracker = ({ title, description, progress }) => {
  return (
    <View style={{ backgroundColor: '#ffffff', padding: 20, marginTop: 20, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderColor: '#CCCCCC', borderWidth: 1 }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
        <Text style={{ fontSize: 14, color: '#666666' }}> {description}</Text>
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

const ExerciseCard = ({ exercises }) => {
  return (
    <View style={styles.container}>
      {exercises.map((exercise, index) => (
        <View key={index} style={styles.exerciseContainer}>
          <View style={styles.content}>
            <Text style={styles.title}>{exercise.exerciseName}</Text>
            <Text style={styles.bodyTarget}>{exercise.bodyTarget}</Text>
          </View>
          <View style={styles.setsReps}>
            <Text>{exercise.sets} x {exercise.reps}</Text>
          </View>
        </View>
      ))}
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
          <CardWithProgressTracker title="Exercise 1" description='12 Exercises Left' progress={0.3}/>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Today's Activity</Text>
            <TouchableOpacity style={{ marginLeft: 190, marginTop: 2 }}>
              <Text style={{ fontSize: 12 }}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, backgroundColor: 'white', padding: 15 }}>
      <ExerciseCard exercises={exercises} />
    </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Overall Status</Text>
            <TouchableOpacity style={{ marginLeft: 190, marginTop: 2 }}>
              <Text style={{ fontSize: 12 }}>See More</Text>
            </TouchableOpacity>
          </View>
        <View style={{ flex: 1, marginTop: 20 }} />
        <ProgressTrackerCard progressData={progressData} />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    marginBottom: 20,
    width: '100%',
  },
  exerciseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  content: {
    flex: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bodyTarget: {
    fontSize: 16,
    color: '#666666',
  },
  setsReps: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default Goals;