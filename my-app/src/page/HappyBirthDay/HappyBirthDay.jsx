import { useState, useEffect, useRef } from "react";
import "./happyBirthDay.scss";
import FrontFace from "./frontFace";
import BackFace from "./backFace";
import { FaDoorOpen } from "react-icons/fa";
import music from "./image/happy-birthday-155461.mp3";

const HappyBirthDay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 1,
    minutes: 1,
    seconds: 1,
  });

  const audioRef = useRef(new Audio(music));

  // Function to play audio
  const playAudio = () => {
    audioRef.current.play();
  };

  // Function to stop audio
  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  // Check if the date is October 7, 2024 at 00:00
  useEffect(() => {
    const targetDate = new Date("2024-10-07T00:00:00").getTime();

    const updateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft(null); // Time has passed, no need to count down
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, []);

  // Toggle book and play/stop music
  const toggleBook = () => {
    setIsOpen(!isOpen);
    if (!isOpen) playAudio();
    else stopAudio();
  };

  if (timeLeft) {
    // Display countdown if the time has not yet reached
    return (
      <div className="countdown-container">
        <div>
          {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes{" "}
          {timeLeft.seconds} Seconds
        </div>
      </div>
    );
  }

  // Display the birthday content if the time has passed
  return (
    <div className="book-container">
      <div className={`book ${isOpen ? "open" : ""}`} id="book">
        <div className="cover">
          <div className="page front">
            <FrontFace />
          </div>
          <div className="page back"></div>
        </div>
      </div>
      <div className="secondpage">
        <BackFace />
      </div>
      <button className="btnHBD" onClick={toggleBook}>
        <FaDoorOpen />
      </button>
    </div>
  );
};

export default HappyBirthDay;
