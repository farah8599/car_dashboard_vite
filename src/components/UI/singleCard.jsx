import React from "react";

const SingleCard = (props) => {
    const { icon, title, percentage } = props.item;
    return (
        <div className="single__card">
            <div className="card__content">
                <span className="card__icon">
                    {/* <i class={icon}></i> */}
                    <img src={icon} alt="" />
                </span>
                <h4>{title}</h4>
                {/* <svg viewBox="0 0 100 100" width="200px">
                    <circle class="load" cx="50" cy="50" r="45" />
                    <circle class="load spesial" cx="50" cy="50" r="45" />
                </svg> */}
                <div className="loader_arc">
                    <svg viewBox="0 0.5 10 8">
                        <path d="M2 8 A 4 4 0 1 1 8 8" fill="none" strokeWidth="0.78" stroke="#E8F6FD" />
                        <path class="loader" d="M2 8 A 4 4 0 1 1 8 8" fill="none" strokeWidth="0.8" stroke="#00ACEE" />
                    </svg>
                </div>
                <div className="percentage">
                    <span>{percentage}%</span>
                </div>
            </div>


        </div>
    );
};

export default SingleCard;