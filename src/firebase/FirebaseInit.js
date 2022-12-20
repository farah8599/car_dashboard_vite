import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBe4zbAf5G4xlthBNeeFXwxQrDBORQyFbs",
    authDomain: "car-dashboard-cfea8.firebaseapp.com",
    projectId: "car-dashboard-cfea8",
    storageBucket: "car-dashboard-cfea8.appspot.com",
    messagingSenderId: "1020386267043",
    appId: "1:1020386267043:web:071a412580cedb7db69416",
    measurementId: "G-SX09K6FFQS"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export firestore database
// It will be imported into your react app whenever it is needed

export const db = getFirestore(app);
