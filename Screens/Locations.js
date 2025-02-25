import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { Button, List, Text } from "react-native-paper";
import { useFireLoc } from "../firebase/FirestoreController";
import { styles } from '../Styles/Styles';

export default function Locations({ navigation }) {

  const locations = useFireLoc();

  return (
    <ScrollView style={styles.container}>
      <Button mode='contained' style={styles.button1} onPress={() => navigation.navigate('AddLocation')} >Add new location</Button>
      {locations.map((loc) => (
        <List.Item
          style={styles.card}
          key={loc.id}
          titleStyle={styles.title}
          title={loc.name}
          description={() => (
            <>
              <Text>{loc.description}</Text>
              <ScrollView horizontal>
                {Array.from({ length: 5 }).map((_, index) => (
                  <MaterialIcons
                    key={index}
                    name={index < loc.rating ? 'star' : 'star-border'}
                    size={25}
                    color='gold'
                  />
                ))}
              </ScrollView>
            </>
          )}
          onPress={() => navigation.navigate('Map', { location: loc.name })}
          right={(props) => <MaterialIcons {...props} name='location-on' color='red' size={35} />}
        />
      ))}
    </ScrollView>
  )
}