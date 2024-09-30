import { useState } from "react";
import "./happyBirthDay.scss";
import FrontFace from "./frontFace";
import BackFace from "./backFace";
import { FaDoorOpen } from "react-icons/fa";
import { useRef } from "react";
import music from "./image/happy-birthday-155461.mp3";
const HappyBirthDay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const audioRef = useRef(new Audio(music)); // Tạo một tham chiếu đến đối tượng Audio

  // Hàm phát âm thanh
  const playAudio = () => {
    audioRef.current.play();
  };

  // Hàm dừng âm thanh
  const stopAudio = () => {
    audioRef.current.pause(); // Dừng phát
    audioRef.current.currentTime = 0; // Đặt lại thời gian phát về 0
  };

  // Thiết lập âm thanh tự động lặp lại
  audioRef.current.loop = true;
  const toggleBook = () => {
    setIsOpen(!isOpen);
    if (!isOpen) playAudio();
    else stopAudio();
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
        <FaDoorOpen />
      </button>
    </div>
  );
};
export default HappyBirthDay;
