import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { addLocation } from "../firebase/FirestoreController";
import { styles } from "../Styles/Styles";

export default function AddLocation({ navigation }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);

    const handleLocation = () => {
        addLocation(name, description, rating)
        setName('');
        setDescription(''),
            setRating(0);
        navigation.goBack();
        console.log("New location: ", { name, description, rating });
    }

    return (
        <View style={styles.container}>
            <TextInput
                label={'Name'}
                value={name}
                onChangeText={setName}
                style={styles.input}
            />

            <TextInput
                label={'Description'}
                value={description}
                onChangeText={setDescription}
                style={styles.input}
            />

            <View style={styles.ratingBox}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
                        <MaterialIcons
                            name={index < rating ? "star" : "star-border"}
                            size={30}
                            color="gold"
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <Button mode='contained' onPress={handleLocation} style={styles.button} >Add new location</Button>
        </View>
    )
}