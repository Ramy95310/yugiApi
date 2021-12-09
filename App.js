<<<<<<< Updated upstream
import { getValues } from 'jest-validate/build/condition';
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput, FormDataEvent, Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.gris}></View>
      <Text style={styles.screen}>Inscription</Text>

      <TextInput placeholder={'Prénom'} onChangeText={() => console.log('onChangeText')}
        onEndEditing={() => console.log('Input end')} />
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
=======
import apiHelper from 'apiHelper'

const getYugioh = ({route , navigation }) => {

const {id} = route.params 

const [data , setData] = useState();

const loadData = useCallback( async()=> {

const res = await apiHelper.getYugiohData(id);

setData(res.data);

}, [id]);

useEffect(() =>{

    loadData();

},[])

}
>>>>>>> Stashed changes
