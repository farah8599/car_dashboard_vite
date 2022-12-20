import car1 from "../Images/car1.png";
import car2 from "../Images/car2.png";
import car3 from "../Images/car3.png";
import car4 from "../Images/car4.png";
import car5 from "../Images/car5.png";
import car6 from "../Images/car6.png";

import { addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase/FirebaseInit'

const bookingCars = [
  {
    id: "01",
    carName: "Porshe 718 Cayman S",
    category: "Coupe",
    type: "Manual",
    groupSize: 4,
    rentPrice: 400,
    imgUrl: car1,
  },
  {
    id: "02",
    carName: "Porshe 718 Cayman S",
    category: "Coupe",
    type: "Manual",
    groupSize: 4,
    rentPrice: 400,
    imgUrl: car2,
  },
  {
    id: "03",
    carName: "Porshe 718 Cayman S",
    category: "Coupe",
    type: "Manual",
    groupSize: 4,
    rentPrice: 400,
    imgUrl: car3,
  },
  {
    id: "04",
    carName: "Porshe 718 Cayman S",
    category: "Coupe",
    type: "Manual",
    groupSize: 4,
    rentPrice: 400,
    imgUrl: car4,
  },
  {
    id: "05",
    carName: "Porshe 718 Cayman S",
    category: "Coupe",
    type: "Manual",
    groupSize: 4,
    rentPrice: 400,
    imgUrl: car5,
  },
  {
    id: "06",
    carName: "Porshe 718 Cayman S",
    category: "Coupe",
    type: "Manual",
    groupSize: 4,
    rentPrice: 400,
    imgUrl: car6,
  },
  {
    id: "07",
    carName: "Porshe 718 Cayman S",
    category: "Coupe",
    type: "Manual",
    groupSize: 4,
    rentPrice: 400,
    imgUrl: car1,
  },
  {
    id: "08",
    carName: "Porshe 718 Cayman S",
    category: "Coupe",
    type: "Manual",
    groupSize: 4,
    rentPrice: 400,
    imgUrl: car2,
  },
  {
    id: "09",
    carName: "Porshe 718 Cayman S",
    category: "Coupe",
    type: "Manual",
    groupSize: 4,
    rentPrice: 400,
    imgUrl: car3,
  },
];

export function importBookingCars(){
  const carsCollection = collection(db, "booking_cars");
  bookingCars.map((car) => addDoc(carsCollection, car));
}

export default bookingCars;