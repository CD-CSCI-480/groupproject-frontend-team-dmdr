import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const profile = require('../assets/images/profile-image1.webp')

const Goals = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.header}>
        <Image source={profile} style={{height: 30, width: 30, paddingHorizontal: 0}}/>
        <Text style={styles.title}>Hello User!</Text>
      </View>
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'flex-start', 
      alignItems:'flex-start',
      paddingTop: 60,

    },
    header: {
      alignItems: 'center',
      flexDirection: 'row', 
      paddingHorizontal: 15,
      paddingVertical: 20
    },
    title: {
      color: '#333', 
      fontSize: 15,
      fontWeight: 'bold',
      marginLeft: 5,
    },
   
  
  });
  
  export default Goals;