import "./dashboard.scss";
// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { setIsLoading } from "../../redux/isLoading/reducer";
import { bindActionCreators } from "redux";
import { PropertieCard } from "../../components/PropertieCard/PropertieCard";
import { useEffect } from "react";
//components
import { Loading } from "../../components/Loading/Loading";
import { FilterForm } from "../../components/FilterForm/FilterForm";

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const dispatchIsLoading = bindActionCreators(setIsLoading, dispatch);
  const { properties, isLoading } = useSelector((state: RootState) => state);
  console.log(properties);
  useEffect(() => {
    if (properties.length !== 0) {
      dispatchIsLoading(false);
    }
  }, [properties]);
  return (
    <>
      <main className="dashboardMain">
        <FilterForm />
        <h2>Results for</h2>
        {isLoading && <Loading />}
        {!isLoading && (
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
        )}
      </main>
    </>
  );
};
