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
    Image
} from 'react-native';


const getYugiohData = ()=> {
    var [DATA,setData] = useState({})
    var [isLoading, setLoading] = useState(true)




    useEffect(()=>{

        console.log('creation')
        fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            .then((response) => response.json())
            .then((json) => {
                setLoading(false)

                setData(json.data)
                console.log(DATA)
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
                <FlatList data={DATA}
                          keyExtractor={(item, index) => 'key' + index}
                          renderItem={({item}) => {
                              return <CardYugi item={item}/>
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