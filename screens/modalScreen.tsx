import React, { useState } from 'react';
import { StyleSheet, View ,ScrollView,TextInput} from "react-native";
import { Button, Text } from 'react-native-elements';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';


export default function modalScreen() {{useNavigation}
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.content}>
       
          <View >
            <Text style={{fontSize:40,textAlign:'center',top:90}}>Akash</Text>
            
          </View>
        <View><TextInput placeholder="What do you want to talk about?" style={{width:''}} keyboardAppearance="default" enablesReturnKeyAutomatically /></View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    
    backgroundColor:'#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
 
	
});