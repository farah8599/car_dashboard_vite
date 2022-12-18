import React from "react";
import Loop_circular__icon from "../../assets/Images/loopCircularIcon.png"
import Loop_rectangular__icon from "../../assets/Images/loopRectangularIcon.png"
import spark_icon from "../../assets/Images/sparkIcon.png"

const RecommendCarCard = (props) => {
    const { carName, retweet, imgUrl, rentPrice, percentage } = props.item;
    return (
        <div className="recommend__car-card">
            <div className="recommend__car-top">
                <h5>
                    <span>
                        <img src={Loop_circular__icon} alt="" />
                    </span>
                    {percentage}% Recommended
                </h5>
            </div>

            <div className="recommend__car-img">
                <img src={imgUrl} alt="" />
            </div>
            <div className="recommend__car-bottom">
                <h4>{carName}</h4>
                <div className="recommend__car-other">
                    <div className="recommend__icons">
                        <p>
                            <img src={Loop_rectangular__icon} alt="" />
                            {retweet}k
                        </p>
                        <p>
                            <i class="ri-settings-2-line"></i>
                        </p>
                        <p>
                            <img src={spark_icon} alt="" />
                        </p>
                    </div>
                    <span>${rentPrice}/h</span>
                </div>
            </div>
        </div>
    );
};

export default RecommendCarCard;