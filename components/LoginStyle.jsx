import {StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors'
const styles=StyleSheet.create({
loginImg:{
    width:'100%',
    height:'60%',
},
bottomCont:{
    width:'100%',
    padding:25,
    marginTop:-20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    backgroundColor:Colors.WHITE,
    height:'45%',
    display:'flex',
    flexDirection:'column',
    // justifyContent:'center',
    // alignItems:'center'
},
mainTxt:{
    fontFamily:'outfit-bold',
    fontSize:30,
    textAlign:'center',
    color:Colors.PRIMARY,
    marginBottom:30,
},
descText:{
    color: "rgba(128, 128, 128, 0.8)",
    textAlign:'center',
    marginBottom:30,
    fontFamily:'outfit',
    fontSize:17,
},
button:{
    backgroundColor:Colors.PRIMARY,
    borderRadius:20,
    padding:10,
    width:'100%',
    marginTop:'15%'
},
buttonText:{
    color:Colors.WHITE,
    fontSize:17,
    fontFamily:'outfit-bold',
    textAlign:'center'
}
})

export default styles;