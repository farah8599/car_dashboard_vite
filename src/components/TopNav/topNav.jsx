import React from "react";

import { Link } from "react-router-dom";
import profileImg from "../../assets/Images/profile.png";
import notification from "../../assets/Images/notification.png"
import search from "../../assets/Images/searchIcon.png"
import "./topNav.scss";

const TopNav = () => {
    return (
        <div className="top__nav">
            <div className="top__nav-wrapper">
                <div className="search__box">
                    <img src={search} alt="" />
                    <span>
                        <input type="text" placeholder=" Search or type" />
                    </span>
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