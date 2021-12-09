import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,useState,useEffect,Button } from 'react-native'
const card = ('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon')
import  axios from 'axios';
import apiHelper from '../'

const getYugiohData = async => {

const res = await axios ({

methode: 'get',
url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon' + name,
});

return res.data;
};

export default {getYugioh};


