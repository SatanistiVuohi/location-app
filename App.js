import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {

  function Locations({navigation}){
    return(
      <View>
      <Button onPress={()=> navigation.navigate('AddLocation')} >
      <Text>Add Location</Text>
      </Button>
      
      <Button onPress={()=> navigation.navigate('Map')} >
      <Text>Map</Text>
      </Button>

      </View>
  )
}
  function AddLocation(){return(<Text>Add Locations</Text>)}
  function Map(){return(<Text>Map</Text>)}

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Locations' component={Locations} />
      <Stack.Screen name='AddLocation' component={AddLocation} />
      <Stack.Screen name='Map' component={Map} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
