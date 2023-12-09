import React, { useState } from "react";
import img from "../images/icon-star.svg";
import { useDispatch } from "react-redux";
import { addRating } from "../redux/ratingSlice";
import ThankeYou from "./ThankeYou";

export default function Rating() {
  const [number, setNumber] = useState("");
  const [flip, setFlip] = useState(false);
  const numRating = [1, 2, 3, 4, 5];

  const dispatch = useDispatch();

  const handelClick = (e) => {
    const x = Object.values(document.getElementsByTagName("li"));

    x.map((ele) => {
      if (ele.innerHTML === e.target.innerHTML) {
        ele.classList.add("active");
        setNumber(ele.innerHTML);
      } else {
        ele.classList.remove("active");
      }
    });
  };
  const submitRating = (e) => {
    if (number > 0) {
      setFlip(true);
      dispatch(addRating({ raiting: number }));
      const parent = document.querySelector(".main");
      parent.style.transform = "rotateY(180deg)";
    }
  };
  return (
    <div class="main">
      <div className="front">
        <div class="logo">
          <span class="star"> </span>
          <img src={img} alt="" />
        </div>
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul className="all">
          {numRating.map((num) => (
            <li onClick={(e) => handelClick(e)}>{num}</li>
          ))}
        </ul>
        <button onClick={() => submitRating()}>Submit</button>
      </div>
      {flip && <ThankeYou />}
    </div>
  );
}
