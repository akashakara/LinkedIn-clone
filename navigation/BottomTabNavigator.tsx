import { Entypo,Ionicons ,Feather,SimpleLineIcons,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets ,StackNavigationProp} from '@react-navigation/stack';
import * as React from 'react';
import {Image, Modal} from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThree from '../screens/TabThree';
import TabFour from '../screens/TabFour';
import TabFive from '../screens/TabFive';
import {useNavigation} from '@react-navigation/native'
import { BottomTabParamList, TabOneParamList, TabTwoParamList,TabThreeParamList,TabFourParamList,TabFiveParamList, modalParamList } from '../types';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { View } from '../components/Themed';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  return (
    
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={24 } color={color} />
          
        }}
       
      />
      <BottomTab.Screen
        name="Network"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Feather name="users" size={24 }  color={color} />,
         
        }}
      />
      <BottomTab.Screen
        name="Post"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-add-circle-outline" color={color} />,
          
        }}
        listeners={({navigation})=>({
          tabPress:event=>{
            event.preventDefault();
            navigation.navigate('modal');
          }
        })}
        
        
      />
  <BottomTab.Screen
        name="Notifications"
        component={TabFour}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-notifications-outline"   color={color} />,

        }}
      />
        <BottomTab.Screen
        name="Jobs"
        component={TabFive}
        options={{
          tabBarIcon: ({ color }) => <SimpleLineIcons name="briefcase" size={24 }  color={color} />,
        }}
      />

    </BottomTab.Navigator>
    
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {

  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Home"
        component={TabOneScreen}
        options={{ headerRight:()=>
        
          <TouchableOpacity style={{right:2}}><MaterialCommunityIcons name="message-text-outline" size={24} color="#fff" /></TouchableOpacity>
           ,
                 headerStyle:{
                  backgroundColor: '#0E76A8',
                 },
          headerTitle:()=>
          <View>
          <TouchableOpacity><View style={{borderRadius:5,flexDirection: 'row',justifyContent:'space-between'}}><FontAwesome name="search" size={18} color="grey" style={{top:5,left:4}} /><TextInput style={{width:250,height:30,fontSize:18,}} placeholder='  Search' ></TextInput></View></TouchableOpacity></View>
      ,
      headerLeft:()=>
      <View style={{borderRadius:40}}><Image source={{uri:'https://scontent.fknu1-1.fna.fbcdn.net/v/t1.0-9/67782063_1407586609382016_1464967693458210816_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=n1iRkmPkhnsAX-VCUOW&_nc_ht=scontent.fknu1-1.fna&oh=38967a36fabf608dd680f0798589f71a&oe=5F3E1582'}} style={{height:30,width:30,borderRadius:40}}/></View>,
      


      }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title',}}
        
      />
    </TabTwoStack.Navigator>
  );
  
  
  
} 

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {

  return (
    <TabThreeStack.Navigator headerMode="none" mode="modal" screenOptions={{animationEnabled: true ,gestureEnabled:true,...TransitionPresets.ModalPresentationIOS,gestureDirection:'vertical'}}>

      <TabThreeStack.Screen
        name="TabThree"
        component={TabThree}
        
      
        
      />
    </TabThreeStack.Navigator>
  );
  
  
  
} 

