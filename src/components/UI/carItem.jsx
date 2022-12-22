
import React, { useState } from "react";
import { decrement, increment } from "../../redux/Counter";
import { useDispatch } from "react-redux";
import isLiked from "../../firebase/FirebaseInit";
import { async } from "@firebase/util";

const CarItem = (props) => {

  const { category, type, rentPrice, imgUrl, carName, groupSize } = props.item;
  const dispatch = useDispatch()
  const [isLikedVar,setActive]=useState(true)

  // const dispatch = useDispatch();
  return (
    <div className="car__item">
      <div className="car__item-top">
        <div className="car__item-tile">
          <h3><b>{carName}</b></h3>
          <span>
            <i className={ `${isLikedVar? "ri-heart-line":"ri-heart-fill"}`} onClick={async () => {
              {
                if (await isLiked(props.item)) {
                  dispatch(increment())  
                  setActive(false)
                }
                else {
                  dispatch(decrement())
                  setActive(true)
                }
              }
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