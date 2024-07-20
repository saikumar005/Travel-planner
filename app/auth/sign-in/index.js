import { View,ScrollView, Text,StyleSheet,TouchableOpacity,TextInput, ToastAndroid } from 'react-native'
import React,{useState} from 'react'
import {Colors} from '../../../constants/Colors';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {auth} from '../../../configs/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
    const router=useRouter();
    
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);


    const onSignIn=()=>{
      if(!email && !password){
        ToastAndroid.show('please enter email and password',ToastAndroid.LONG);
        return;
      }
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    ToastAndroid.show(`${errorMessage}`,ToastAndroid.LONG)
  });
    }


  return (
    <ScrollView style={{backgroundColor:Colors.WHITE}}>
    <View style={styles.maincontainer}>
        <TouchableOpacity style={{marginBottom:10}}
        onPress={()=>{router.back()}}
        >
            <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      <Text style={styles.bannerTextMain}>Welcome Back! </Text>
      <Text style={styles.bannerText}>Unlock Exclusive Deals & Discover Hidden Gems. Sign in to start exploring.</Text>
      <Text style={styles.label}>
        Email ID
      </Text>
      <TextInput style={styles.input} 
      keyboardType='email-address'
      onChangeText={(val)=>{setEmail(val)}}
      placeholder='enter Email ID' />
      <Text style={styles.label}>
        Password
      </Text>
      <TextInput secureTextEntry={true} 
      onChangeText={(val)=>{setPassword(val)}}
      style={styles.input} placeholder='enter Password' />
      <TouchableOpacity
      style={[styles.button,{backgroundColor:Colors.PRIMARY}]}
      >
        <Text style={[styles.buttonText,{color:Colors.WHITE,}]}
        onPress={onSignIn}
        >Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.bannerText}>Don't have an account ?</Text>
      <TouchableOpacity
      style={[styles.button,{backgroundColor:Colors.WHITE}]}
      onPress={()=> {router.replace('/auth/sign-up')} }
      >
        <Text style={[styles.buttonText,{color:Colors.PRIMARY,}]}>Sign In</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
    maincontainer:{
        height:'100%',
        width:'100%',
        backgroundColor:Colors.WHITE,
        padding:20,
        paddingTop:50
    },
    bannerTextMain:{
        fontSize:30,
        fontFamily:'outfit-bold',
        marginBottom:20
    },
    bannerText:{
        fontSize:20,
        fontFamily:'outfit',
        color:Colors.GRAY,
        marginBottom:20
    },
    label:{
        fontSize:16,
        fontFamily:'outfit-medium',
        color:Colors.PRIMARY,
        marginBottom:10
    },
    input:{
        borderWidth:1,
        padding:15,
        borderStyle:'solid',
        borderColor:Colors.GRAY,
        borderRadius:15,
        marginBottom:25
    },
    button:{
        borderWidth:1,
        borderColor:Colors.GRAY,
        borderRadius:15,
        padding:15,
        marginBottom:25
    },
    buttonText:{
        textAlign:'center',
        fontSize:17,
        fontFamily:'outfit-bold'
    }
})