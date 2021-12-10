import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

const CardYugi = ({item}) => {
  const [likedList, updateList] = useState([]);

  const setData = async () => {
    const jsonValue = JSON.stringify(likedList);
    AsyncStorage.setItem('likedCard', jsonValue);
  };

  function checkForm(i) {
    updateList([...likedList, i]);
  }

  useEffect(() => {
    setData();
  });

  return (
    <View style={styles.viewcenter}>
      <Image
        style={styles.sectionContainer1}
        source={{uri: item.card_images[0].image_url}}
      />
      <Text style={styles.titlecolor}>{item.name}</Text>
      <Button
        title="like"
        onPress={() => {
          checkForm(item);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer1: {
    width: 350,
    height: 500,
  },
  titlecolor: {
    color: '#841584',
  },
  viewcenter: {
    alignItems: 'center',
  },
});

export default CardYugi;
