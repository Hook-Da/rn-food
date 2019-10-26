import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RenderDetail = ({ restaurant}) => {
    return <View style={styles.container}>
        <Image style={styles.imageStyle} source={{uri:restaurant.image_url}} />
        <Text>{restaurant.name}</Text>
        <Text style={styles.textStyle}>Rating:{restaurant.rating}. Reviews:{restaurant.review_count}</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:15
    },
    imageStyle:{
        width:250,
        height:120
    },
    textStyle:{
        fontSize:14,
        fontWeight:'bold'
    }
});

export default RenderDetail;