import "./inputSearch.scss";
// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
//actions
import { setFirstSearch } from "../../redux/properties/actions";
import { setIsLoading } from "../../redux/isLoading/reducer";
// router hooks
import { useLocation, useNavigate } from "react-router-dom";
import glassIcon from "../../assets/img/glassIcon.png";
import { bindActionCreators } from "redux";
import { useState } from "react";

export const InputSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  //redux hooks
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { setFirstSearch, setIsLoading },
    dispatch
  );

  // router
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue === "") return console.log("input empty");
    if (pathname === "/") {
      navigate("/dashboard");
    }
    // first search with input
    actions.setIsLoading(true);
    actions.setFirstSearch(inputValue);
  };

  return (
    <article className="inputFilterArticle">
      <h3>Select your destiny</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <span className="inputSearchContainer">
          <input
            className="inputSearch"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="City, country..."
          />
          <button type="submit" className="noBtn">
            <img src={glassIcon} alt="glass" />
          </button>
        </span>
      </form>
    </article>
  );
};
