import "./inputSearch.scss";

import glassIcon from "../../assets/img/glassIcon.png";

export const InputSearch: React.FC = () => {
  return (
    <article className="inputFilterArticle">
      <h3>Select your destiny</h3>
      <form>
        <span className="inputSearchContainer">
          <input
            className="inputSearch"
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
