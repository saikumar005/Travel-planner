import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './LoginStyle';
import { useRouter } from 'expo-router';

export default function Login() {
  const router=useRouter();
  return (
    <View>
      <Image style={styles.loginImg} source={require('../assets/images/Login/LandingPage.jpg')}/>
      <View style={styles.bottomCont}>
        <Text style={styles.mainTxt}>AI Travel Planner</Text>
        <Text style={styles.descText}>Unlock Your Next Adventure. Explore curated itineraries, simplify travel planning.</Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>{router.push('auth/sign-in')}}
        >
            <Text style={styles.buttonText}>Sign in with google</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  )
}