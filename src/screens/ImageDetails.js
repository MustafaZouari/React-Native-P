import React from 'react'
import { View, Text, Image } from 'react-native'

const ImageDetails = ({title,ImageSource}) => {
    return (
        <View style = {{flexDirection : 'row' , marginHorizontal : 10 , marginVertical : 10,alignItems : 'center' , justifyContent : 'center'  }} >
            <Text style = {{width : 65}}> {title} </Text>
            <Image source = {ImageSource} />
        </View>
    )
}

export default ImageDetails
