
import React from "react";
import { increment } from "../../redux/Counter";
import { useDispatch} from "react-redux";

const CarItem = (props) => {

  const { category, type, rentPrice, imgUrl, carName, groupSize } = props.item;

  const dispatch = useDispatch();
  return (
    <div className="car__item">
      <div className="car__item-top">
        <div className="car__item-tile">
          <h3><b>{carName}</b></h3>
          <span>
            <i className="ri-heart-line" onClick={() => {
              dispatch(increment())
            }}></i>
          </span>
        </div>
        <p>{category}</p>
      </div>

      <div className="car__img">
        <img src={imgUrl} alt="" height='100px' />
      </div>

      <div className="car__item-bottom">
        <div className="car__bottom-left">
          <p>
            <i className="ri-user-line"></i> {groupSize}
          </p>
          <p>
            <i className="ri-repeat-line"></i>
            {type}
          </p>
        </div>

        <p className="car__rent"><b>${rentPrice}</b>/d</p>
      </div>
    </div>
  );
};

export default CarItem;