import { db } from '../firebase/firebase';
import { addDoc, collection } from '@firebase/firestore';

// Add the record to Firestore
export const addToFirestore = async (newData: any) => {
    try {
        const docRef = await addDoc(collection(db, "data-store"), newData);
        alert("Data Added to the Database")
        console.log("Document written with ID: ", docRef.id);
        return true
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Error: Check the console logs")
        return false
    }
}