import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, List, Text } from "react-native-paper";



export default function Locations({ navigation }) {

const [location, setLocation] = useState();

    return (
        <ScrollView>
            <Button mode='contained' onPress={() => navigation.navigate('AddLocation')} >Add new location</Button>
            <List.Item
                
                title="First Item"
                description="Item description"
                right={props => <List.Icon {...props} icon="map-marker" color="red"/>}
                onPress={() => navigation.navigate('Map')}
            />
            
        </ScrollView>
    )
}