import { useState } from "react";
import "./happyBirthDay.scss";
import FrontFace from "./frontFace";
import BackFace from "./backFace";
const HappyBirthDay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBook = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="book-container">
      <div className={`book ${isOpen ? "open" : ""}`} id="book">
        <div className="cover">
          <div className="page front">
            <FrontFace></FrontFace>
          </div>
          <div className="page back"></div>
        </div>
      </div>
      <div className="secondpage">
        <BackFace></BackFace>
      </div>
      <button className="btnHBD" onClick={toggleBook}>
        Open/Close Book
      </button>
    </div>
  );
};
export default HappyBirthDay;
