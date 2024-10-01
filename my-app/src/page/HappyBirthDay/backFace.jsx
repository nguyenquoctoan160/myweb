import "./backFace.scss";
import Balloons from "./component/Balloon/Balloon";
import BirthDayCake from "./component/BirthDayCake/BirthDayCake";
import FireWork from "./component/Firework/FireWork";
import imageOcto from "./image/octo-removebg-preview.png";
import { useState } from "react";
import scifiBubble from "./image/sci-fi-bubble-pop-89059.mp3";
import BubblePop from "./image/bubble-sound-43207.mp3";
const BackFace = () => {
  const [bubbles, setBubbles] = useState([]);
  const playBubbleSound = () => {
    const sound = new Audio(scifiBubble); // Đường dẫn tới tệp âm thanh
    sound.play();
  };
  const playBubblePop = () => {
    const sound = new Audio(BubblePop); // Đường dẫn tới tệp âm thanh
    sound.play();
  };
  const createBubbles = (count) => {
    const newBubbles = [];
    for (let i = 0; i < count; i++) {
      newBubbles.push({
        id: Date.now() + i, // Đảm bảo id duy nhất
        left: Math.random() * 20 + 5, // Vị trí ngẫu nhiên
        size: Math.random() * 10,
        animationDuration: Math.random() * 2 + 5, // Thời gian nổi lên ngẫu nhiên
      });
    }
    setBubbles((prevBubbles) => [...prevBubbles, ...newBubbles]);
    playBubbleSound();
    // Xóa bong bóng sau 3 giây
    setTimeout(() => {
      setBubbles((prevBubbles) => prevBubbles.slice(count)); // Xóa các bong bóng đã tạo
    }, 3000);
  };

  const handleClick = () => {
    createBubbles(5); // Gọi hàm tạo bong bóng 5 lần
  };
  return (
    <div className="BDbackfaceContainer">
      {/* <FireWork></FireWork> */}
      <div className="BFBorder">
        <Balloons></Balloons>
        <div className="BDtext">
          <div> Happy Birthday, Quynh!</div>
          <div>
            {" "}
            May this special day bring endless joy, love, and success your way.
          </div>

          <div>
            {" "}
            Deserving of all the best in life, this year is sure to offer
            countless opportunities and beautiful moments. Admired for your
            strength, kindness, and creativity, it's clear that amazing things
            are ahead. As the celebrations unfold, may laughter, love, and
            happiness fill the day, surrounded by those who cherish and support
            you. Wishing you an unforgettable birthday and a year full of
            exciting adventures and achievements.{" "}
          </div>
          <div> Happy Birthday !</div>
        </div>
      </div>

      <img
        src={imageOcto}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
        alt="Sticker"
      />
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.left}vh`,
            animationDuration: `${bubble.animationDuration}s`,
            width: `${bubble.size}vh`,
            height: `${bubble.size}vh`,
          }}
          onClick={() => {
            setBubbles((prevBubbles) =>
              prevBubbles.filter((thisbubble) => thisbubble.id !== bubble.id)
            );
            playBubblePop();
          }}
        >
          <div className="dot"></div>
        </div>
      ))}

      <BirthDayCake></BirthDayCake>
    </div>
  );
};
export default BackFace;
