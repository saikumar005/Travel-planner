import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect,useContext,useState } from 'react'
import { useNavigation,useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import CreateTripContext from '../../context/CreateTripContext';
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';

export default function SelectDates() {
    const navigation=useNavigation();
    const router=useRouter();
    const {tripData,setTripData}=useContext(CreateTripContext);
    const [startDate,setStartDate]=useState();
    const [endDate,setEndDate]=useState();


    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])

    const onDateChange=(date,type)=>{
        if(type==='START_DATE')
        {
            setStartDate(moment(date))
        }
        else{
            setEndDate(moment(date))
        }
    }

    const onClickContinue=()=>{
        if(!startDate && !endDate)
        {
            ToastAndroid.show('please select start and end date',ToastAndroid.LONG);
            return;
        }
        const totalDays=endDate.diff(startDate,'days');
        setTripData({
            ...tripData,
            startDate:startDate,
            endDate:endDate,
            totalNumOfDays:totalDays+1
        })
        router.push('/mytrip/select-budget')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>SelectDates</Text>
      <View
      style={{marginTop:20}}
      >
        <CalendarPicker onDateChange={onDateChange}
        allowRangeSelection={true}
        minDate={new Date()}
        maxRangeDuration={5}
        selectedRangeStyle={{
            backgroundColor:Colors.PRIMARY
        }}
        selectedDayTextStyle={{
            color:Colors.WHITE
        }}
        />
      </View>
      <TouchableOpacity style={[styles.button,{backgroundColor:Colors.PRIMARY}]}
      onPress={onClickContinue}
      >
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
  }
})