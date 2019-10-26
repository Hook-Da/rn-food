import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp  from '../api/yelp';

const ResultShow = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);
    
    const getResult = async (id) => {
        try{
            const response = await yelp.get(`/${id}`,{
                params:{
                    locale:'en_US'
                }
            })
            setResult(response.data);        
        }catch(e){
            console.log('%c++','background:',e);
        }
    }
    console.log('%c++','background:',result);
    useEffect(()=>{
        getResult(id);
    },[]);

    if(!result){
        return null;
    }

    return (
        <View>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo)=>{
                    return  photo
                }}
                renderItem={({item})=>{
                    return <Image style={styles.image} source={{uri:item}}/>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300
    }
});

export default ResultShow;