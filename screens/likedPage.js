import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';

const LikedPage = () => {
  const [likedList, updateList] = useState([]);
  var [isLoading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('likedCard');
      return JSON.parse(jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const run = async () => {
      setLoading(false);
      console.log(await getData(), 'ici');
      updateList(await getData());
    };
    run();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text color="#841584">is Loading</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={likedList}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({item}) => {
            return (
              <View>
                <Image
                  style={styles.sectionContainer1}
                  source={{uri: item.card_images[0].image_url}}
                />
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer1: {
    width: 40,
    height: 40,
  },
});

export default LikedPage;
