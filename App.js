import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FormDataEvent,
  Button,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigationContainer from "@react-navigation/native/src/NavigationContainer";

function HomeScreen({ navigation }) {
  const [myInputname, setmyInputname] = useState('');
  const [myInputmdp, setmyInputmdp] = useState('');
  const [newpagelog, setnewpagelog] = useState(false);
    //var newpagelog = false;


    console.log(myInputmdp);
  const storeData = async (myInputname, myInputmdp) => {
    try {
      const dataname = JSON.stringify(myInputname);
      const datamdp = JSON.stringify(myInputmdp);
      AsyncStorage.setItem('@name', dataname);
      AsyncStorage.setItem('@mdp', datamdp);
      console.log('store: ' + ' ' + dataname + ' ' + datamdp);
      return dataname && datamdp;
    } catch (e) {
      // saving error
      console.log('caca');
    }

  };

  const getData = async () => {
    try {
      const dataname = await AsyncStorage.getItem('@name');
      const datamdp = await AsyncStorage.getItem('@mdp');

      if (dataname != null || datamdp != null) {
        const dataall = JSON.parse(datamdp) + ' ' + JSON.parse(dataname);

        // value previously stored
        return console.log(dataall);
      }
    } catch (e) {}
  };

    const verifconnect = async () => {
      const storedataname = await AsyncStorage.getItem('@name');
      const storedatamdp = await AsyncStorage.getItem('@mdp');

      const inputdataname = JSON.stringify(myInputname);
      const inputdatamdp = JSON.stringify(myInputmdp);

      console.log("store= " + storedataname +" "+ storedatamdp )
      console.log("input= " + inputdataname +" "+ inputdatamdp )
      if (storedataname === inputdataname && storedatamdp === inputdatamdp ){
          console.log("connect!!!!")
          return true;
      }else {
          console.log("nop")
          return false;
      }
  };

    const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.gris}>
      <View style={styles.gris} />
      <Text>Inscription</Text>

      <TextInput
        backgoundcolor="#0000"
        color="#841584"
        placeholder={'pseudo'}
        value={myInputname}
        onChangeText={setmyInputname}
        onEndEditing={() => console.log(myInputname)}
      />

      <TextInput
        secureTextEntry={true}
        color="#841584"
        placeholder={'mdp'}
        value={myInputmdp}
        onChangeText={setmyInputmdp}
        onEndEditing={() => console.log(myInputmdp)}
      />

      <Button
        onPress={() => {
          const myInput = 'name: ' + myInputname + ' mdp: ' + myInputmdp;
          console.log(myInput);
          return storeData(myInputname, myInputmdp);
        }}
        title="inscription"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Button
        onPress={()=>{
            if (verifconnect()){
                navigation.navigate('Details')
                console.log("Details")
            }
            }}
        title="connection"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
}

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  gris: {
    flex: 5,
    backgroundColor: 'grey',
  },
});
