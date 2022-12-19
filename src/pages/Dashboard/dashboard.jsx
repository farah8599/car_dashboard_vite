
import React from 'react'
import './dashboard.scss'

import SingleCard from "../../components/UI/singleCard"

import Energy_icon from "../../assets/Images/energyIcon.png"
import Range_icon from "../../assets/Images/rangeIcon.png"
import Break_icon from "../../assets/Images/breakFluidIcon.png"
import Tire_icon from '../../assets/Images/tireWearIcon.png'

import MileChart from "../../components/Charts/mileChart";

import CarStatsChart from "../../components/Charts/carStatsChart";

import RecommendCarCard from "../../components/UI/recommendCarCard";

import recommendCarsData from "../../assets/DummyData/recommendCars";

const energyObj = {
    icon: Energy_icon,
    title: "Energy",
    percentage: "45",
    id: 'first-pie',
    first_color: '#b37efc',
    second_color: '#ffffff',
};

const rangeObj = {
    icon: Range_icon,
    title: "Range",
    percentage: "157k",
    id: 'second-pie',
    first_color: '#f4f5f9',
    second_color: '#ff7e86',
};

const breakObj = {
    icon: Break_icon,
    title: "Break fluid",
    percentage: "9",
    id: 'third-pie',
    first_color: '#f4f5f9',
    second_color: '#a162f7',
};

const tireObj = {
    icon: Tire_icon,
    title: "Tire Wear",
    percentage: "25",
    id: 'fourth-pie',
    first_color: '#f4f5f9',
    second_color: '#f6cc0d',
};

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard__wrapper">
                <div className="dashboard__cards">
                    <SingleCard item={energyObj} />
                    <SingleCard item={rangeObj} />
                    <SingleCard item={breakObj} />
                    <SingleCard item={tireObj} />
                </div>

                <div className="statistic">
                    <div className="stats">
                        <h3 className="stats__title"><b>Miles</b> Statistics</h3>
                        <MileChart />
                    </div>

                    <div className="stats">
                        <h3 className="stats__title"><b>Car</b> Statistics</h3>
                        <CarStatsChart />
                    </div>
                </div>

                <div className="recommend__cars-wrapper">
                    {recommendCarsData.map((item) => (
                        <RecommendCarCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Dashboard;