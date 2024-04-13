import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


import Goals from "../src/Goals";
import Home from "../src/Home";
import Settings from "../src/Settings";
import Workout from "../src/Workout";
import Search from "../src/Search";

const Tab = createBottomTabNavigator();
const CustomTabBarButton =({children, onPress}) =>(
<TouchableOpacity
style={{
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    ...styles.shadow
}}
onPress={onPress}
>
    <View style={{
        width:70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45'
    }}>
        {children}
    </View>
</TouchableOpacity>
);

const Tabs = () =>{
    return(
        <Tab.Navigator
        tabBarOptions={{
            tabBarShowLabel:false,
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 90,
                ...styles.shadow
            }
        }}>
            <Tab.Screen 
            name="Search" 
            component={Search}
            options={{
                tabBarIcon: ({focused})=>(
                    <View style={{ alignItems:'center', justifyContent: 'center', top:10}}>
                        <Image
                        source={require('../assets/icons/search-icon.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height: 25,
                            tintColor:focused ?'#e32f45':'#748c94'
                        }}
                        />
                        <Text style={{ color: focused ? '#e32f45':'#748c94', fontSize: 12 }}>Search</Text>
                    </View>
                )
                }}/>
            <Tab.Screen 
            name="Goals" 
            component={Goals}
            options={{
                tabBarIcon: ({focused})=>(
                    <View style={{ alignItems:'center', justifyContent: 'center', top:10}}>
                        <Image
                        source={require('../assets/icons/progresscheck-icon.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height: 25,
                            tintColor:focused ?'#e32f45':'#748c94'
                        }}
                        />
                        <Text style={{ color: focused ? '#e32f45':'#748c94', fontSize: 12 }}>Goals</Text>
                    </View>
                )
                }}/>
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({focused})=>(
                        <Image
                        source={require('../assets/icons/home-icon.png')}
                        resizeMode='contain'
                        style={{
                            width:30,
                            height: 30,
                            tintColor: '#fff'
                        }}
                        />
                ),
                tabBarButton: (props) =>(
                    <CustomTabBarButton {...props}/>
                )
            }}/>
            <Tab.Screen 
            name="Workout" 
            component={Workout}
            options={{
                tabBarIcon: ({focused})=>(
                    <View style={{ alignItems:'center', justifyContent: 'center', top:10}}>
                        <Image
                        source={require('../assets/icons/workout-icon.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height: 25,
                            tintColor:focused ?'#e32f45':'#748c94'
                        }}
                        />
                        <Text style={{ color: focused ? '#e32f45':'#748c94', fontSize: 12 }}>Workout</Text>
                    </View>
                )
                }}/>
            <Tab.Screen 
            name="Settings" 
            component={Settings}
            options={{
                tabBarIcon: ({focused})=>(
                    <View style={{ alignItems:'center', justifyContent: 'center', top:10}}>
                        <Image
                        source={require('../assets/icons/settings-icon.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height: 25,
                            tintColor:focused ?'#e32f45':'#748c94'
                        }}
                        />
                        <Text style={{ color: focused ? '#e32f45':'#748c94', fontSize: 12 }}>Settings</Text>
                    </View>
                )
                }}/>
        </Tab.Navigator> 

    );
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }

})

export default Tabs;