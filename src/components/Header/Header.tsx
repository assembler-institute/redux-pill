import houseIcon from "../../assets/img/houseIcon.png";
import "./header.scss";

import { useNavigate } from "react-router-dom";
export const Header: React.FC = () => {
  const router = useNavigate();
  return (
    <header className="homeHeader">
      <button className="HeaderBtnLogo noBtn" onClick={() => router("/")}>
        <img className="headerImg" src={houseIcon} alt="house" />
        <h1 className="headerTitle">Housing FakeAPI</h1>
      </button>
    </header>
  );
};
