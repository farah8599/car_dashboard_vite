import React from 'react'
import './bookings.scss'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/FirebaseInit'
import carData, { importBookingCars } from "../../assets/DummyData/bookingCars";
import CarItem from "../../components/UI/carItem";
import Grid_icon from "../../assets/Images/gridIcon.png"
import Filter_icon from "../../assets/Images/filterIcon.png"
import { useDispatch, useSelector } from 'react-redux';

const Bookings = () => {
    const Cars= useSelector((state)=>state.filter.filteredData)
    // importBookingCars();
    return (
        <div className="bookings">
            <div className="booking__wrapper">
                <h2 className="booking__title">Booking</h2>
                <div className="filter__widget-wrapper">
                    <div className="filter__widget-01">
                        <select>
                            <option value="New">New</option>
                            <option value="Popular">Popular</option>
                            <option value="Upcoming">Upcoming</option>
                        </select>
                    </div>

                    <div className="filter__widget-02">
                        <select>
                            <option value="toyota">Toyota</option>
                            <option value="bmw">Bmw</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div className="icons_right">
                        <div className="grid">
                            <img src={Grid_icon} alt="" />
                        </div>
                        <div className="filter">
                            <img src={Filter_icon} alt="" />
                        </div>
                    </div>
                </div>

                <div className="booking__car-list">
                    {Cars?.map((item,index) => (
                        <CarItem item={item} key={index} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Bookings