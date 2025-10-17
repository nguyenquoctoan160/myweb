import { useState, useEffect, useRef } from "react";
import "./happyBirthDay.scss";
import FrontFace from "./frontFace";
import BackFace from "./backFace";
import { FaDoorOpen } from "react-icons/fa";
import music from "./image/happy-birthday-155461.mp3";

const HappyBirthDay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [serverTime, setServerTime] = useState(null);
  const birthday = "2025-10-17T15:32:00"; // cập nhật lại ngày sinh cho đúng năm
  const audioRef = useRef(new Audio(music));

  // Lấy thời gian thực từ API
  useEffect(() => {
    const fetchServerTime = async () => {
      try {
        const res = await fetch(
          "https://worldtimeapi.org/api/timezone/Asia/Bangkok"
        );
        const data = await res.json();
        setServerTime(new Date(data.datetime).getTime());
      } catch (error) {
        console.error("Không thể lấy thời gian từ API:", error);
        setServerTime(new Date().getTime()); // fallback nếu API lỗi
      }
    };

    fetchServerTime();
  }, []);

  // Cập nhật đếm ngược
  useEffect(() => {
    if (!serverTime) return; // chờ có dữ liệu serverTime

    const targetDate = new Date(birthday).getTime();
    let currentTime = serverTime;

    const updateTimeLeft = () => {
      currentTime += 1000; // tăng 1 giây mỗi lần lặp
      const difference = targetDate - currentTime;

      if (difference <= 0) {
        setTimeLeft(null);
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
    return () => clearInterval(timer);
  }, [serverTime]);

  // Điều khiển âm thanh
  const playAudio = () => audioRef.current.play();
  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const toggleBook = () => {
    setIsOpen(!isOpen);
    if (!isOpen) playAudio();
    else stopAudio();
  };

  if (!serverTime)
    return <div className="loading">Đang tải thời gian thực...</div>;

  if (timeLeft) {
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
