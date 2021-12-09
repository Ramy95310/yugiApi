import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    FormDataEvent,
    Button,
    FlatList,
} from 'react-native';

const getYugiohData = ()=> {

    const [data,setData] = useState('')

    useEffect(()=>{
        fetch('https://db.ygoprodeck.com/api/v7/randomcard.php')
            .then((response) => response.json())
            .then((json) => {
                setData(json.name)
            })
            .catch((error) => {
                console.error(error);
            });

    },[])

    return (
        <SafeAreaView style={styles.gris}>

            <Text color="#841584">{data}</Text>

        </SafeAreaView>
    );
};

export default getYugiohData;
const styles = StyleSheet.create({
    gris: {
        flex: 5,
        backgroundColor: 'grey',
    },
    cen: {
        flex: 5,
        alignContent: "center",
    }
});