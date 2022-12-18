import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/DummyData/navLinks";
import "./sideBar.scss";
import logo from '../../assets/Images/logo.png';
import logout from '../../assets/Images/logoutIcon.png'
import settings from '../../assets/Images/settingsIcon.png'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h2>
                    <span>
                        <img src={logo} alt="" />
                    </span>
                    {" "}
                    Motiv.
                </h2>
            </div>

            <div className="sidebar__content">
                <div className="menu">
                    <ul className="nav__list">
                        {navLinks.map((item, index) => (
                            <li className="nav__item" key={index}>
                                <NavLink
                                    to={item.path}
                                    className={(navClass) =>
                                        navClass.isActive ? "nav__active nav__link" : "nav__link"
                                    }
                                >
                                    <img src={item.icon} alt=""/> {" "}

                                    {item.display}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="sidebar__bottom">
                    <span>
                        <img src={settings} alt="" /> {" "}
                        Settings
                    </span>
                    <span>
                        <img src={logout} alt="" /> {" "}
                        Log out
                    </span>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;