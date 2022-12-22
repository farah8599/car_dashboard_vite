import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs,getDoc,doc,setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { increment,decrement } from "../redux/Counter";

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

export async function getbookingCars() {
    const carsCollection = collection(db, 'bookingcars')
    const carsDocs = await getDocs(carsCollection)
    const cars = []
    carsDocs.docs.map((car) =>
        cars.push({cid:car.id,...car.data()})
    )
    return cars;
};



async function isLiked(likedCar){

    const docRef = doc(db, 'likedCars', likedCar.cid)
    const docData = await getDoc(docRef)

 
    if (docData.data()===undefined) {
      console.log('No such document exista!');
      const dbRef= doc(db, "likedCars",likedCar.cid);
      setDoc(dbRef, likedCar)
      return 1;
    
    } else {
      console.log('Document data:', docData.data());
     return 0;
    }

     
}
export default isLiked;
