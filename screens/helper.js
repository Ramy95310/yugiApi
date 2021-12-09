import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,useState,useEffect,Button } from 'react-native'
const card = ('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon')
import  axios from 'axios';

const HelperAPI = async async => {

    const res = await axios({

        methode: 'get',
        url: card + name,
    });

    return <View>res.data</View>;
};

export default {HelperAPI};