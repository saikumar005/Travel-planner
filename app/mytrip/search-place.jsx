import { View, Text } from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default function SearchPlace() {
    const navigation=useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTitle:'search',
            headerTransparent:true
        })
    },[]);

    const GooglePlacesInput = () => {
        return (
          <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
              language: 'en',
            }}
          />
        );
      };


  return (
    <View style={{
        padding:25,
        marginTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
      <GooglePlacesInput />
    </View>
  )
}