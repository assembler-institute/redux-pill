import "./inputSearch.scss";
// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
//actions
import { setFirstSearch } from "../../redux/properties/actions";
import { setValue } from "../../redux/searchValue/actions";
// router hooks
import { useLocation, useNavigate } from "react-router-dom";
import glassIcon from "../../assets/img/glassIcon.png";
import { bindActionCreators } from "redux";

export const InputSearch: React.FC = () => {
  //redux hooks
  const dispatch = useDispatch();
  const actions = bindActionCreators({ setValue, setFirstSearch }, dispatch);
  const inputValue = useSelector((state: RootState) => state.searchReducer);

  // router
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue === "") return console.log("input empty");
    actions.setFirstSearch(inputValue);
    if (pathname === "/") {
      navigate("/dashboard");
    }
  };

  return (
    <article className="inputFilterArticle">
      <h3>Select your destiny</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <span className="inputSearchContainer">
          <input
            className="inputSearch"
            value={inputValue}
            onChange={(e) => actions.setValue(e.target.value)}
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
