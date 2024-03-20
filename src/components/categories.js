import React from "react";
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import {categoriesData}from "../constants/index";

const Categories = () => {
    return(
        <View style={{paddingVertical:20}}>
            <View style={{marginHorizontal: 20, flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontWeight: '600', color: '#4A5568'}}>Categories</Text>
                <TouchableOpacity>
                    <Text style={{fontSize: 12, color:'#e32f45'}}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
            horizontal
            contentContainerStyle={{paddingHorizontal:15,paddingVertical: 8, justifyContent: 'space-between'}}
            showsHorizontalScrollIndicator={false}
            >
            {
                categoriesData.map((cat, index) =>{
                    return(
                        <TouchableOpacity key={index} style={{alignItems:'center',marginTop:8, marginBottom: 8, marginRight: 8}}>
                            <Image source={cat.imgUrl} style={{width: 80, height: 80, borderRadius: 12, }}/>
                            <Text style={{ marginTop: 8, fontSize: 10}}>{cat.title}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            </ScrollView>
        </View>
    )
}

export default Categories;