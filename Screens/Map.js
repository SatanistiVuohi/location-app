import { useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { styles } from '../Styles/Styles';

export default function Map() {
  const [loc, setLoc] = useState(null);
  const route = useRoute();
  const locationName = route.params?.location || 'Map';

  useEffect(() => {
    async function getLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Geolocation failed. No permission granted!');
        return;
      }

      if (locationName) {
        let coords = await Location.geocodeAsync(locationName);
        if (coords.length > 0) {
          setLoc({ lat: coords[0].latitude, lon: coords[0].longitude });
        } else {
          console.log('Location not found.');
        }
      } else {
        console.log('No location name passed.');
      }
    }
    getLocation();
  }, [locationName]);

  return (
    <View style={styles.container}>
      {loc && (
        <MapView
          style={styles.map}
          region={{
            latitude: loc.lat,
            longitude: loc.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      )}
    </View>
  );
}