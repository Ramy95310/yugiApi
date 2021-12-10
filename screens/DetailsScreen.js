import React, {useEffect, useState} from 'react';
import CardYugi from './cardYugi';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    FormDataEvent,
    Button,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';


const getYugiohData = ({navigation})=> {

    
    var [DATA,setData] = useState({})
    var [isLoading, setLoading] = useState(true)
    const [filtered, updateFiltered] = useState('')


    useEffect(()=>{

        console.log('creation')
        fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            .then((response) => response.json())
            .then((json) => {
                setLoading(false)
                setData(json.data)
            })
            .catch((error) => {
                console.error(error);
                setLoading(false)
            });
    },[])

    if (isLoading) return(
        <View>
            <Text color="#841584">is Loading</Text>
        </View>
    )
    return (
        <SafeAreaView>
            <View>
            <TextInput 
        value={filtered}
        placeholder="recherche"
        onChangeText={updateFiltered}
        />
        <TouchableOpacity onPress={()=>{navigation.navigate('Liked')}}>
            <Text>Go to liked card</Text>
        </TouchableOpacity>
                <FlatList data={DATA}
                          keyExtractor={(item, index) => 'key' + index}
                          renderItem={({item}) => {
                              return item.name.includes(filtered) ? <CardYugi item={item}/> : null
                          }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer1: {
        width:40,
        height: 40
    }})

export default getYugiohData;