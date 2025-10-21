import "./birthDayCake.scss";
import { useState } from "react";
import { FaFire } from "react-icons/fa";
const BirthDayCake = () => {
  const [candle1, SetCandle1] = useState(true);
  const [candle2, SetCandle2] = useState(true);
  const [candle3, SetCandle3] = useState(true);
  const lightOn = () => {
    SetCandle1(true);
    SetCandle2(true);
    SetCandle3(true);
  };
  return (
    <div className="cakeContainer">
      <div className="firebtn" onClick={lightOn}>
        <FaFire />
      </div>
      <div className="cake">
        <div className="plate"></div>
        <div className="layer layer-bottom"></div>
        <div className="layer layer-middle"></div>
        <div className="layer layer-top"></div>
        <div className="icing"></div>
        <div className="drip drip1"></div>
        <div className="drip drip2"></div>
        <div className="drip drip3"></div>
        <div
          className="candle candle1"
          onClick={() => {
            SetCandle1(!candle1);
          }}
        >
          <div className={`flame ${candle1 ? "active" : ""}`}></div>
        </div>
        <div
          onClick={() => {
            SetCandle2(!candle2);
          }}
          className="candle candle2"
        >
          <div className={`flame ${candle2 ? "active" : ""}`}></div>
        </div>
        <div
          onClick={() => {
            SetCandle3(!candle3);
          }}
          className="candle candle3"
        >
          <div className={`flame ${candle3 ? "active" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};
export default BirthDayCake;
