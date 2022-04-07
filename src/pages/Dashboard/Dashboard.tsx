// hooks
import { useEffect } from "react";
// styles
import "./dashboard.scss";
// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
// actions
import { setIsLoading } from "../../redux/isLoading/reducer";
import { setSearchWithFilter } from "../../redux/properties/actions";
import { bindActionCreators } from "redux";

//components
import { PropertieCard } from "../../components/PropertieCard/PropertieCard";
import { Loading } from "../../components/Loading/Loading";
import { FilterForm } from "../../components/FilterForm/FilterForm";

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const action = bindActionCreators(
    { setIsLoading, setSearchWithFilter },
    dispatch
  );
  const { properties, isLoading } = useSelector((state: RootState) => state);

  // manage filter form
  const handleDispatchFilterForm = (form: IFormFilter) => {
    action.setIsLoading(true);
    action.setSearchWithFilter(form);
  };

  useEffect(() => {
    if (properties.length === 0) {
      console.log("search not found");
      return;
    }
    action.setIsLoading(false);
  }, [properties]);
  console.log(properties);
  return (
    <>
      <main className="dashboardMain">
        <FilterForm dispatch={handleDispatchFilterForm} />
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <h2>Results for</h2>
            <PropertieCard
              image={properties[0].image}
              title={properties[0].type}
              city={properties[0].city}
              rooms={properties[0].room}
              size={properties[0].size}
              price={properties[0].price}
              description={properties[0].description}
              contactPhone={properties[0].contact_phone}
            />
          </>
        )}
      </main>
    </>
  );
};
