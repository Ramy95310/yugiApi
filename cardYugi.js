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


const CardYugi = ({item})=> {

return (

        <View>
            <Image style={styles.sectionContainer1} source={{uri: item.card_images[0].image_url}}/>
            <Text>{item.name}</Text>
        </View>

  );
};

const styles = StyleSheet.create({

  sectionContainer1: {
    width:40,
    height: 40 
  }})

export default CardYugi;


