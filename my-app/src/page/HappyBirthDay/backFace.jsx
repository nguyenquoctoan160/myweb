import "./backFace.scss";
import Balloons from "./component/Balloon/Balloon";
import BirthDayCake from "./component/BirthDayCake/BirthDayCake";
const BackFace = () => {
  return (
    <div className="BDbackfaceContainer">
      <div className="BFBorder">
        <Balloons></Balloons>
      </div>
      <BirthDayCake></BirthDayCake>
    </div>
  );
};
export default BackFace;
