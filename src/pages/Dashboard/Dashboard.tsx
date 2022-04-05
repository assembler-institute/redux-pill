import { FilterForm } from "../../components/FilterForm/FilterForm";
import "./dashboard.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
export const Dashboard: React.FC = () => {
  const properties = useSelector((state: RootState) => state.propertiesReducer);
  console.log(properties);
  return (
    <>
      <main className="dashboardMain">
        <FilterForm />
      </main>
    </>
  );
};
