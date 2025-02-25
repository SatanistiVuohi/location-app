import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, List, Text } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';
import { useFireLoc } from "../firebase/FirestoreController";

export default function Locations({ navigation }) {

    const locations = useFireLoc();
    
    return (
        <ScrollView>
            <Button mode='contained' onPress={() => navigation.navigate('AddLocation')} >Add new location</Button>
      {locations.map((loc) => (
        <List.Item
          key={loc.id}
          title={loc.name}
          description={() => (
            <>
              <Text>{loc.description}</Text>
              <ScrollView horizontal>
                {Array.from({ length: 5 }).map((_, index) => (
                  <MaterialIcons
                    key={index}
                    name={index < loc.rating ? 'star' : 'star-border'}
                    size={20}
                    color='gold'
                  />
                ))}
              </ScrollView>
            </>
          )}
          
          onPress={() => navigation.navigate('Map', { location: loc.name })}
          right={(props) => <List.Icon {...props} icon='map-marker' color='red' />}
        />
      ))}
        </ScrollView>
    )
}