import React from "react";
import { Button, Text, StyleSheet, View } from "react-native";

const HomeScreen = ({navigation}) => {
  
   
  return (
    <View style = {styles.screenView} >
     <Text style={styles.text}>HomeScreen</Text> 
     <Button title = "Change Screen" onPress = {()=>{
       navigation.navigate('List')
     }} />
     <Button title = "Change Screen To components" onPress = {()=>{
       navigation.navigate('Component')
     }} />
     <Button title = "Change Screen To ImageScreen" onPress = {()=>{
       navigation.navigate('Image')
     }} />
    </View>
    
    );
};

const styles = StyleSheet.create({
  text: {
    textAlign : 'center',
    fontSize: 30,
    color : '#10375c',
    fontWeight  : 'bold',
    fontStyle : 'italic',
    

  },
  screenView : {
    height : '100%',
    backgroundColor : '#ea907a',

  }
});

export default HomeScreen;
