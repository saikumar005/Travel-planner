import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect,useContext,useState } from 'react'
import { useNavigation,useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import CreateTripContext from '../../context/CreateTripContext';
import moment from 'moment';

export default function ReviewTrip() {
    const navigation=useNavigation();
    const {tripData,setTripData}=useContext(CreateTripContext);
    const iconsList={
        location:'📍',
        calender:'🗓️',
        bus:'🚌',
        cost:'💰'
    };
    const travelText=` ${moment(tripData?.startDate).format('DD MMM')} to ${moment(tripData?.endDate).format('DD MMM')}  (Days ${tripData?.totalNumOfDays}) `

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])

    const SelectionBox=(props)=>{
        const {icon,heading,textToDisplay}=props;
        return(
            <View style={styles.selectionBox}>
                <View>
                    <Text style={styles.icon}>{icon}</Text>
                </View>
                <View style={{marginVertical:15}}>
                    <Text style={styles.boxHeading}>{heading}</Text>
                    <Text style={styles.boxText}>{textToDisplay}</Text>
                </View>
            </View>
        )
    }

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Review your trip</Text>
      <View>
        <Text style={styles.subText}>Before generating your trip, Please review your selection.</Text>
        <SelectionBox icon={iconsList.location} heading={'Destination'} textToDisplay={tripData?.locationInfo?.name} />
        <SelectionBox icon={iconsList.calender} heading={'Travel Date'} textToDisplay={travelText} />
        <SelectionBox icon={iconsList.bus} heading={'Who is Traveling'} textToDisplay={tripData?.travelers?.title} />
        <SelectionBox icon={iconsList.cost} heading={'Budget'} textToDisplay={tripData?.budget} />
      </View>
      <TouchableOpacity style={[styles.button,{backgroundColor:Colors.PRIMARY}]}>
        <Text style={[styles.buttonText,{color:Colors.WHITE}]}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        padding:20,
        paddingTop:75,
        height:'100%',
        backgroundColor:Colors.WHITE
    },
    mainText:{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginBottom:15,
        marginTop:20
    },
    subText:{
        fontFamily:'outfit-bold',
        fontSize:17,
        marginBottom:15
    },
    button:{
      borderWidth:1,
      borderColor:Colors.GRAY,
      borderRadius:25,
      padding:15,
      marginTop:25
  },
  buttonText:{
      textAlign:'center',
      fontSize:17,
      fontFamily:'outfit-medium'
  },
  selectionBox:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:15,
  },
  icon:{
    fontSize:30,
  },
  boxHeading:{
    fontSize:20,
    color:Colors.GRAY,
    fontFamily:'outfit-medium'
  },
  boxText:{
    fontSize:17,
    fontFamily:'outfit-bold'
  }
})