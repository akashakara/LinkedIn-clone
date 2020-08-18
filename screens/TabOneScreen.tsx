import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome,Feather } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { RouteProp} from '@react-navigation/native';
import '../navigation/index'
import {useNavigation} from '@react-navigation/native'
import modalScreen from './modalScreen';
import {StackNavigationProp} from '@react-navigation/stack'




export default function TabOneScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.post}><TouchableOpacity onPress={()=>navigation.navigate('modal') }><FontAwesome name="pencil-square-o" size={24} color="grey"  style={{top:9,left:4}} /><TextInput style={{width:260,height:50,fontSize:18,left:30,bottom:30}} placeholder='  Write a post' ></TextInput></TouchableOpacity>
      
    </View>
    <View style={styles.postc}><Feather name="video" size={24} color="grey"  style={{top:9,left:4}} />
      
    </View>
    <View style={styles.postd}><Feather name="camera" size={24} color="grey"  style={{top:9,left:4}} />
      
    </View>
    
    
      <Text >Tab One</Text>
     
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#D3D3D3'
  },

 
  post:{
    bottom :198,
    right:38,
    flexDirection:'row',
    borderRadius:3,
    height:45
  },
  postc:{
    bottom:245,
    left:114,
    height:45,
    width:37

  },
  postd:{
    bottom:290,
    left:155,
    height:45,
    width:37
  }
});
