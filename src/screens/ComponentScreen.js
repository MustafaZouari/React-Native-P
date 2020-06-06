import React from 'react'
import { View, Text , StyleSheet  } from 'react-native'

const ComponentScreen = () => {
    const myName = 'Mustafa' ; 
    return (
        <View>
            <Text style = {{ fontSize : 45}}> Getting Started with React native  </Text>
            <Text style = {{ fontSize : 20}}> My name Is {myName}  </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 30
    }
})


export default ComponentScreen ; 
