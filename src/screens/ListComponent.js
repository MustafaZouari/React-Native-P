import React from 'react'
import { View, Text, StyleSheet , FlatList } from 'react-native'

const ListComponent = () => {
    const friends = [
        {name : 'Friend 1'},
        {name : 'Friend 2'},
        {name : 'Friend 3'},
        {name : 'Friend 4'},
        {name : 'Friend 5'}
    ]
    return (
        <View>
            <FlatList keyExtractor = {(friend)=> friend.name }
             data = {friends}
             renderItem = {({item , index})=>
             (
                <Text style = {styles.textStyle} > {item.name} </Text>
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
