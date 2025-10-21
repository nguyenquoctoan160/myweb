import "./clam.scss";
import imageClam from "../../image/conso.png";
import imageD from "../../image/bangkhen.png";
import { useState } from "react";
const Clam = () => {
  const [isShow, setShow] = useState(false);
  const onClick = () => {
    setShow(!isShow);
  };
  return (
    <div className="clam" onClick={onClick}>
      <h1 className={isShow ? "ConTitle" : "texthidden"}>Congratulations!</h1>
      <img
        className={`degree ${isShow ? "" : "hidden"}`}
        src={imageD}
        style={{ cursor: "pointer" }}
        alt="Sticker"
      />
      <img
        className="claim"
        src={imageClam}
        style={{ cursor: "pointer" }}
        alt="Sticker"
      />
    </div>
  );
};
export default Clam;
