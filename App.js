import React from 'react';

import {SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     
      <View style={styles.gris}></View>

      <Text style={styles.screen}>
       
        Inscription

      </Text>
        <TextInput
      value={'Prénom'}
      placeholder={'Prénom'}/>
      onChangeText={() => console.log('onChangeText')}
      onEndEditing={() => console.log('Input end')}
      //secureTextEntry
      <TextInput>
        
      </TextInput>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
gris: {
  flex : 5,
  backgroundColor: "grey"

  
  },
});

export default App;