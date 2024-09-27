import "./home.scss";
import { FaPersonBooth } from "react-icons/fa";
import { useState } from "react";
const Home = () => {
  const [text, setText] = useState(""); // Sử dụng state để lưu giá trị input

  const handleClick = () => {
    if (text !== "") {
      window.location.href = `${text}`;
    } else {
      alert("Chưa nhập mà");
    }
  };
  return (
    <div className="myhome">
      <h1>Chào Mừng</h1>
      <div className="homeinput">
        <input
          placeholder="Nhập gì đó vào ..."
          value={text} // Gán giá trị của input với state
          onChange={(e) => setText(e.target.value)}
        ></input>
        <div className="btnHome" onClick={handleClick}>
          <FaPersonBooth />
        </div>
      </div>
    </div>
  );
};
export default Home;
