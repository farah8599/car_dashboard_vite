import React from "react";

const SingleCard = (props) => {
    const { icon, title, percentage, id, first_color, second_color } = props.item;
    return (
        <div className="single__card">
            <div className="card__content">
                <span className="card__icon">
                    <img src={icon} alt="" />
                </span>
                <h4>{title}</h4>
                <div className="loader_arc">
                    <svg viewBox="0 0.5 10 8" >
                        <path d="M2 8 A 4 4 0 1 1 8 8" fill="none" strokeWidth="0.78" stroke={first_color} />
                        <path className="loader" id={id} d="M2 8 A 4 4 0 1 1 8 8" fill="none" strokeWidth="0.8" stroke={second_color} />
                    </svg>

                    <div className="percentage">
                        <span>{percentage}%</span>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleCard;