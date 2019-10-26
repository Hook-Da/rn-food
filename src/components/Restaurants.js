import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import RenderDetail from './RenderDetail';
import { withNavigation } from 'react-navigation';

const Restaurants = ({title, results, navigation}) => {
    return (
        <View>
            <Text style={styles.textStyle}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                showsHorizontalScrollIndicator={false}
                keyExtractor={result=>result.id}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate('ResultShow',{id:item.id});
                        }}>
                            <RenderDetail restaurant={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        marginHorizontal:15,
        marginVertical:5,
        fontSize:18,
        fontWeight:'bold'
    }
});

export default withNavigation(Restaurants);