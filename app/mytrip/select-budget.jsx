import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid,FlatList } from 'react-native'
import React, { useEffect,useContext,useState } from 'react'
import { useNavigation,useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import CreateTripContext from '../../context/CreateTripContext';
import {SelectBudgetList} from '../../constants/SelectTraveler';
import SelectTravelerCard from '../../components/selectTraveler/SelectTravelerCard'

export default function SelectBudget() {
    const navigation=useNavigation();
    const router=useRouter();
    const [selectedItem,setSelectedItem]=useState({})
    const {tripData,setTripData}=useContext(CreateTripContext);

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])

    useEffect(()=>{
        setTripData({...tripData,budget:selectedItem?.title})
      },[selectedItem]);

      const handleContinue=()=>{
        if(!selectedItem.id)
        {
          ToastAndroid.show('please select budget',ToastAndroid.LONG)
        }
        else{
          router.push('/mytrip/review-trip')
        }
      }

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Budget</Text>
      <Text style={styles.subText}>Choose spending habits for you trip.</Text>
      <FlatList 
      data={SelectBudgetList}
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
  }
})