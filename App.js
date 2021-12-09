import React , { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput, FormDataEvent, Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-community/async-storage";


function HomeScreen() {
  const [myInputname, setmyInputname]=useState("");
  const [myInputmdp, setmyInputmdp]=useState("");

    const storeData = async (myInputname, myInputmdp) => {
        try {
            const dataname = JSON.stringify(myInputname)
            const datamdp = JSON.stringify(myInputmdp)
            AsyncStorage.setItem('@name', dataname)
            AsyncStorage.setItem('@mdp', datamdp)
            console.log("store: "+ " " + dataname +" " +datamdp)
        } catch (e) {
            // saving error
            console.log("caca")
        }
    }

    const getData = async () => {
        try {
            const dataname = await AsyncStorage.getItem('@name')
            const datamdp = await AsyncStorage.getItem('@mdp')

            if(dataname != null || datamdp != null) {
                const dataall = JSON.parse(datamdp) + " " + JSON.parse(dataname)

                // value previously stored
                return console.log(dataall)
            }
        } catch(e) {}
    }

  return (
    <SafeAreaView style={styles.gris}>

      <View style={styles.gris}/>
      <Text>Inscription</Text>

      <TextInput backgoundcolor="#0000" color="#841584" placeholder={'pseudo'} value={myInputname}
          onChangeText={setmyInputname} onEndEditing={() =>console.log(myInputname)}/>

          <TextInput secureTextEntry={true} color="#841584" placeholder={'mdp'} value={myInputmdp}
          onChangeText={setmyInputmdp} onEndEditing={() =>console.log(myInputmdp)}/> 

          <Button onPress={() =>{const myInput ="name: " + myInputname +" mdp: "+ myInputmdp ; console.log(myInput);return  storeData( myInputname, myInputmdp)}} title="inscription"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"/>

        <Button onPress={() =>{return  getData()}} title="get"
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
