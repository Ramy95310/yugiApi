import { getValues } from 'jest-validate/build/condition';
import React from 'react'
import {SafeAreaView, StyleSheet, Text, View, TextInput, FormDataEvent, Button} from 'react-native'


const App = () => {
    return (
      <SafeAreaView style={styles.container}>
       
        <View style={styles.gris}></View>
          <Text style={styles.screen}>Inscription</Text>

          <TextInput placeholder={'Prénom'}  onChangeText={ () => console.log('onChangeText')}
                       onEndEditing={ () => console.log('Input end')}/>        
      </SafeAreaView>
    );

};

const styles = StyleSheet.create({
gris: {
  flex : 5,
  backgroundColor: "grey",
  },
});

export default App;