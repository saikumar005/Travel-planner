import { View, Text,StyleSheet, Image } from 'react-native'
import { Colors } from '../../constants/Colors';
import React, { useEffect,useContext,useState } from 'react'
import { useRouter } from 'expo-router'
import CreateTripContext from '../../context/CreateTripContext';
import {GEMINI_PROMPT} from '../../constants/SelectTraveler';
import {chatSession} from '../../configs/geminiAi';
import { doc, setDoc } from 'firebase/firestore';
import {auth,db} from '../../configs/firebaseConfig';

export default function GenerateTrip() {
    const [isLoading,setIsLoading]=useState();
    const router=useRouter();
    const {tripData,setTripData}=useContext(CreateTripContext);
    const generteTrip=async ()=>{
        setIsLoading(true)
        const FINAL_PROMPT=GEMINI_PROMPT.replace('{location}',tripData?.locationInfo?.name)
                                        .replace('{totalNoOfDays}',tripData?.totalNumOfDays)
                                        .replace('{nights}',tripData?.totalNumOfDays-1)
                                        .replace('{traveler}',tripData?.travelers?.title)
                                        .replace('{budget}',tripData?.budget)
                                        .replace('{totalNoOfDays}',tripData?.totalNumOfDays)
                                        .replace('{nights}',tripData?.totalNumOfDays-1);
        console.log(FINAL_PROMPT);
        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result.response.text());
        setIsLoading(false);
        const user=auth.currentUser;
        const _result=JSON.parse(result.response.text())
        const docId=(Date.now()).toString()
        await setDoc(doc(db,"UserTrip",docId),{
            userEmail:user.email,
            tripPlan:_result,
            tripData:JSON.stringify(tripData)
        })
        router.push('/mytrip')
    }

    useEffect(()=>{
        tripData&&generteTrip()
    },[])

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Please wait.....</Text>
      <Text style={styles.subText}>We are working on generating your dream trip.</Text>
      <Image style={styles.image} source={require('../../assets/images/loading.gif')}/>
      <Text style={styles.backText}>Please Don't Go Back</Text>
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
        textAlign:'center'
    },
    subText:{
        fontFamily:'outfit-bold',
        fontSize:20,
        marginBottom:15,
        textAlign:'center'
    },
    image:{
        width:'100%',
        objectFit:'contain'
    },
    backText:{
        fontFamily:'outfit-medium',
        fontSize:20,
        marginTop:15,
        textAlign:'center',
        color:Colors.GRAY
    },
})