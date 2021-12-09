import { getValues  } from 'jest-validate/build/condition';
import React , { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput, FormDataEvent, Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  const [myInputname, setmyInputname]=useState("");
  const [myInputmdp, setmyInputmdp]=useState("");
  return (
    <SafeAreaView style={styles.gris}>

      <View style={styles.gris}/>
      <Text>Inscription</Text>

      <TextInput backgoundcolor="#0000" color="#841584" placeholder={'pseudo'} value={myInputname}
          onChangeText={setmyInputname} onEndEditing={() =>console.log(myInputname)}/>

          <TextInput color="#841584" placeholder={'mdp'} value={myInputmdp}
          onChangeText={setmyInputmdp} onEndEditing={() =>console.log(myInputmdp)}/> 

          <Button onPress={() =>{const myInput ="name: " + myInputname +" mdp: "+ myInputmdp ; console.log(myInput)}} title="connection"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"/>

    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  gris: {
    flex: 5,
    backgroundColor: "grey",
  },
});
