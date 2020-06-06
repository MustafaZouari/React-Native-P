import React from 'react'
import { View, Text , StyleSheet } from 'react-native';
import ImageDetails from './ImageDetails'

const ImageScreen = () => {
    return (
        <View >
            <ImageDetails ImageSource = {require('../../assets/Images/beach.jpg')} title ='Beach' />
            <ImageDetails ImageSource = {require('../../assets/Images/mountain.jpg')} title = 'Mountain' />
            <ImageDetails ImageSource = {require('../../assets/Images/forest.jpg')} title =  'Forest' />
        </View>
    )
}
const styles = StyleSheet.create()
export default ImageScreen
