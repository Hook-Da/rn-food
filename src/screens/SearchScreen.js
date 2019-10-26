import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useResult from '../hooks/useResults';

import Restaurants from '../components/Restaurants';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, restaurant, error] = useResult();

    const filterResultByPrice = (price) =>{
        return restaurant.filter((res)=>{
            return res.price === price;
        })
    }

    return (
        <>
            <SearchBar 
                term={term}
                onTermChange={(newTerm)=>{
                    setTerm(newTerm);
                }}
                onTermSubmit={()=>{
                    searchApi(term); }
                }
            />
            {error?<Text>{error}</Text>:null}
            <ScrollView>
                <Restaurants results={filterResultByPrice('$')} title="Cost Effective"/>
                <Restaurants results={filterResultByPrice('$$')} title="Bit Pricier"/>
                <Restaurants results={filterResultByPrice('$$$')} title="Big Spender"/>
                <Restaurants results={filterResultByPrice('$$$')} title="Big Spender"/>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;