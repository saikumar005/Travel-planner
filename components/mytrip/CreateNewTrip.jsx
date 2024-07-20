import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import {Colors} from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CreateNewTrip() {
    const router=useRouter();
  return (
    <View style={styles.container} >
        <Ionicons name="location-sharp" size={27} color="black" />
        <Text style={styles.mainText}>No Trips Planned Yet</Text>
        <Text style={styles.subText}>
        The world is your oyster! Craft a new trip and let's turn travel dreams into reality.
        </Text>
        <TouchableOpacity
        style={[styles.button,{backgroundColor:Colors.PRIMARY}]}
        onPress={()=>router.push('/mytrip/search-place')}
        >
            <Text style={[styles.buttonText,{color:Colors.WHITE,}]}>
                Start a New Trip
            </Text>
        </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        padding:20,
        marginTop:20,
        display:'flex',
        alignItems:'center',
        gap:20
    },
    mainText:{
        color:Colors.PRIMARY,
        fontSize:25,
        fontFamily:'outfit-bold',
        textAlign:'center'
    },
    subText:{
        color:Colors.GRAY,
        fontSize:17,
        fontFamily:'outfit',
        textAlign:'center'
    },
    button:{
        borderWidth:1,
        borderColor:Colors.GRAY,
        borderRadius:25,
        padding:15,
        marginBottom:25
    },
    buttonText:{
        textAlign:'center',
        fontSize:17,
        fontFamily:'outfit-medium'
    }
})