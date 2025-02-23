import { useEffect, useState } from "react";
import { db, LOC_REF } from "./Config";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";

export function useFireLoc() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {

        const q = query(collection(db, LOC_REF));

        onSnapshot(q, querySnapshot => {
            setLocations(querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }));
        });
    }, [])

    return locations;
}

export function addLocation(name, description, rating){
    addDoc( collection(db, LOC_REF), {name, description, rating})
    .catch(error => console.log(error.message));
}