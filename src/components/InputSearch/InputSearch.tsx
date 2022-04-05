import "./inputSearch.scss";
// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
//actions
import { setPropertiesByCountryOrCity } from "../../redux/properties/actions";
import { setValue } from "../../redux/searchValue/actions";

import glassIcon from "../../assets/img/glassIcon.png";
import { bindActionCreators } from "redux";

export const InputSearch: React.FC = () => {
  const dispatch = useDispatch();
  const setInputvalue = bindActionCreators(setValue, dispatch);
  const inputValue = useSelector((state: RootState) => state.searchReducer);
  return (
    <article className="inputFilterArticle">
      <h3>Select your destiny</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPropertiesByCountryOrCity(inputValue);
        }}
      >
        <span className="inputSearchContainer">
          <input
            className="inputSearch"
            value={inputValue}
            onChange={(e) => setInputvalue(e.target.value)}
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
