import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function SelectTravelerCard({options,selectedItem}) {
  return (
    <View 
    style={[styles.totalCard,selectedItem.id===options.id && {borderWidth:3}]}
    >
      <View style={{maxWidth:'80%'}}>
        <Text style={styles.personText}>{options.title}</Text>
        <Text style={styles.descText}>{options.text}</Text>
      </View>
      <View>
      <Text style={styles.icon}>
        {options.icon}
      </Text>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    totalCard:{
        backgroundColor:Colors.LIGHT_GRAY,
        padding:15,
        borderRadius:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    personText:{
        fontFamily:'outfit-bold',
        fontSize:20,

    },
    descText:{
        fontFamily:'outfit',
        fontSize:18
    },
    icon:{
        fontSize:40
    }
})