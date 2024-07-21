import { View, Text, StyleSheet, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect,useState,useContext } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import SelectTravelerList from '../../constants/SelectTraveler';
import SelectTravelerCard from '../../components/selectTraveler/SelectTravelerCard'
import CreateTripContext from '../../context/CreateTripContext';

export default function SelectTraveler() {
    const navigation=useNavigation();
    const router=useRouter();
    const {tripData,setTripData}=useContext(CreateTripContext);
    const [selectedItem,setSelectedItem]=useState({})
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[]);

    useEffect(()=>{
        setTripData({...tripData,travelers:selectedItem})
      },[selectedItem]);

    const handleContinue=()=>{
      if(!selectedItem.id)
      {
        ToastAndroid.show('please select any one of the above options',ToastAndroid.LONG)
      }
      else{
        router.push('/mytrip/select-dates')
      }
    }

  return (
    <View style={{
        backgroundColor:Colors.WHITE,
        height:'100%',
        padding:20,
        paddingTop:80
    }}>
      <Text style={styles.mainText}>Who's Traveling</Text>
      <Text style={styles.subText}>Choose your travelers</Text>
      <FlatList 
      data={SelectTravelerList}
      renderItem={({item,index})=>(
        <TouchableOpacity 
        onPress={()=>{setSelectedItem({...item})}}
        style={{
            marginVertical:10,
        }}>
            <SelectTravelerCard options={item} selectedItem={selectedItem} />
        </TouchableOpacity>
      )}
      />
      <TouchableOpacity style={[styles.button,{backgroundColor:Colors.PRIMARY}]}
      onPress={handleContinue}
      >
        <Text style={[styles.buttonText,{color:Colors.WHITE}]}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    mainText:{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginBottom:15
    },
    subText:{
        fontFamily:'outfit-bold',
        fontSize:20,
        marginBottom:15
    },
    buttonCont:{
      width:'100%'
    },
    link:{width:'100%'},
    button:{
      borderWidth:1,
      borderColor:Colors.GRAY,
      borderRadius:25,
      padding:15,
      marginBottom:10
  },
  buttonText:{
      textAlign:'center',
      fontSize:17,
      fontFamily:'outfit-medium'
  }
})