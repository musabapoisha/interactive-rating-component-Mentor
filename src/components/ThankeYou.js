import React from "react";
import illustrator from "../images/illustration-thank-you.svg";
import { useSelector } from "react-redux";

export default function ThankeYou() {
  const raiting = useSelector((state) => state.rating.raiting);
  return (
    <div className="back">
      <img src={illustrator} alt="" />
      <p className="rate">You {raiting} selected out of 5</p>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
