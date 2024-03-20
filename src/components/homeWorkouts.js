import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native'
import {HomeWorkoutsData} from '../constants/index';


const HomeWorkouts = () => {
    return(
        <View style={styles.container}>
        {
        HomeWorkoutsData.map((item, index) =>{
            return(
                <HomeWorkoutsCard item={item} key={index}/>
            )

        })

    }
    </View>
    )
}

const HomeWorkoutsCard =({item})=>{
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    return(
    <TouchableOpacity 
    style={{
        width: screenWidth * 0.45, 
        height: screenHeight * 0.25,
        justifyContent: 'flex-end',
        postion: 'relative',
        padding: 8,
        paddingTop: 12, 
        marginBottom: 20,}}>
            <Image source={item.imgUrl} style={{width: '100%', height: '100%', borderRadius:15, position:'absolute'}}/>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={{fontSize: 10, color: '#fff'}}>{item.intensity} &bull; {item.bodyTarget}</Text>
            <Text style={{fontSize: 8, color: '#fff'}}>{item.time}</Text>
        </TouchableOpacity>

    )
}

const styles = {
    container: {
      marginHorizontal: 16, 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      flexWrap: 'wrap', 
    },
    title:{
        fontSize: 12,
        fontWeight: '600',
        color: '#fff',
    }
    
  };
export default HomeWorkouts;