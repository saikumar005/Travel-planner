import { View, Text } from 'react-native'
import React, { useContext,useState, useEffect,useRef } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import CreateTripContext from '../../context/CreateTripContext';


export default function SearchPlace() {
    const navigation=useNavigation();
    const router=useRouter();
    const {tripData,setTripData}=useContext(CreateTripContext);

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTitle:'search',
            headerTransparent:true
        })
    },[]);

  return (
    <View style={{
        padding:25,
        marginTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
      {/* <GooglePlacesInput /> */}
      <GooglePlacesAutocomplete
            placeholder='Search Place'
            fetchDetails = {true}
            onChangeText={(val)=>{setInputField(val)}}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              setTripData({
                locationInfo:{
                  name:data.description,
                  coordinates:details?.geometry.location,
                  photoRef:details?.photos[0]?.photo_reference,
                  url:details?.url
                }
              })
              router.push('/mytrip/select-traveler')
            }}
            query={{
              key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
              language: 'en',
            }}

            styles={
              {
                textInputContainer:{
                  borderWidth:1,
                  borderRadius:10,
                  borderColor:'black',
                  marginTop:20,
                  padding:5
                }
              }
            }
      />
    </View>
  )
}