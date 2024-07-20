import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CreateNewTrip from '../../components/mytrip/CreateNewTrip'
import {Colors} from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function MyTrip() {
    const [myTrips,setMyTrips]=useState([])
  return (
    <View>
        <View style={styles.topBar}>
            <Text style={styles.barText}>My Trips</Text>
            <Ionicons name="add-circle" size={30} color="black" />
        </View>
        {
            myTrips.length===0?
            <CreateNewTrip/> :
            null
        }
    </View>
  )
}

const styles=StyleSheet.create({
    topBar:{
        padding:20,
        marginTop:50,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    barText:{
        fontSize:30,
        fontFamily:'outfit-bold'
    }
})