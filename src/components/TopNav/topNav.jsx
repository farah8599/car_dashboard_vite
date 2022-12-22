import React from "react";

import { Link } from "react-router-dom";
import profileImg from "../../assets/Images/profile.png";
import notification from "../../assets/Images/notification.png"
import search from "../../assets/Images/searchIcon.png"
import "./topNav.scss";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/Filter"

const TopNav = () => {
    const dispatch = useDispatch()
    const onChangeHandler = (event) => {
        console.log(event.target.value)
        dispatch(filter(event.target.value))
    }
    const { count } = useSelector(state => state.counter)
    return (
        <div className="top__nav">
            <div className="top__nav-wrapper">
                <div className="search__box">
                    <img src={search} alt="" />
                    <span>
                        <input type="text" onChange={onChangeHandler} placeholder=" Search or type" />
                    </span>
                </div>
                <div className="counter">
                    <p>{count}</p>
                </div>
                <div className="top__nav-right">
                    <span className="notification">
                        <Link to="/notifications">
                            <img src={notification} alt="" />
                        </Link>
                    </span>
                    <div className="profile">
                        <Link to="/settings">
                            <img src={profileImg} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;