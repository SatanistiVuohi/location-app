import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddLocation from './Screens/AddLocation';
import Locations from './Screens/Locations';
import Map from './Screens/Map';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Locations' component={Locations} options={{ title: 'Locations' }} />
        <Stack.Screen name='AddLocation' component={AddLocation} options={{ title: 'Add new location' }} />
        <Stack.Screen name='Map' component={Map} options={{ title: 'Location on map' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

