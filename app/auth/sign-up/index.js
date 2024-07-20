import { View, Text,StyleSheet,TouchableOpacity,TextInput,ScrollView, ToastAndroid } from 'react-native'
import React,{useState} from 'react'
import {Colors} from '../../../constants/Colors';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {auth} from '../../../configs/firebaseConfig';
import {createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
    const router=useRouter();
    const [fullName,setFullName]=useState(null);
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);

    const onCreateAccount=()=>{
      if(!email && !fullName && !password){
        ToastAndroid.show('please enter all details!',ToastAndroid.BOTTOM)
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      router.replace('/mytrip')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      ToastAndroid.show(`${errorCode} ${errorMessage}`,ToastAndroid.BOTTOM)
      // ..
    });
    }


    return (
    <ScrollView 
    style={{backgroundColor:Colors.WHITE}}
    >
      <View style={styles.maincontainer}>
      <TouchableOpacity style={{marginBottom:10}}
        onPress={()=>{router.back()}}
        >
            <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.bannerTextMain}>Welcome to Travell Planner</Text>
        <Text style={styles.bannerText}>
        Create an account to start planning your dream getaway.
        </Text>
        <Text style={styles.label}>
          Full Name
        </Text>
        <TextInput style={styles.input}
        onChangeText={(val)=>{setFullName(val)}}
        placeholder='enter full name' />
        <Text style={styles.label}>
          Email
        </Text>
        <TextInput keyboardType='email-address' 
        onChangeText={(val)=>{setEmail(val)}}
        style={styles.input} placeholder='enter Email' />
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
          onPress={onCreateAccount}
          >Create Account</Text>
        </TouchableOpacity>
        <Text style={styles.bannerText}>Already have an account.!</Text>
        <TouchableOpacity
        style={[styles.button,{backgroundColor:Colors.WHITE}]}
        onPress={()=> {router.replace('/auth/sign-in')} }
        >
          <Text style={[styles.buttonText,{color:Colors.PRIMARY,}]}>Sign Up</Text>
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