import React from 'react'
import { View, Text, StyleSheet , FlatList } from 'react-native'

const ListComponent = () => {
    
    const friends = [
        {name : 'Friend 1' , age : 50},
        {name : 'Friend 2' , age : 55},
        {name : 'Friend 3' , age : 58},
        {name : 'Friend 10', age : 59},
        {name : 'Friend 4', age : 88},
        {name : 'Friend 8', age : 33},
        {name : 'Friend 7', age : 8},
        {name : 'Friend 5', age : 66}
    ]
    return (
        <View>
            <FlatList 
             keyExtractor = {(friend)=> friend.name }
             data = {friends}
             renderItem = {({item , index})=>
             (
                <Text style = {styles.textStyle} > {item.name}  age :  {item.age} </Text>
             )}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle : {
        marginVertical : 20 
    }
})
export default ListComponent;
