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
    Image
} from 'react-native';
import {autoCapitalize, autoComplete} from "react-native/Libraries/DeprecatedPropTypes/DeprecatedTextInputPropTypes";


const CardYugi = ({item})=> {

    return (

        <View style={styles.viewcenter}>
            <Image style={styles.sectionContainer1} source={{uri: item.card_images[0].image_url}}/>
            <Text style={styles.titlecolor}>{item.name}</Text>
        </View>


    );
};

const styles = StyleSheet.create({

    sectionContainer1: {

        width:350,
        height: 500

    },
    titlecolor:{
        color: "#841584",
    },
    viewcenter:{
        alignItems:"center",
    }
})

export default CardYugi;