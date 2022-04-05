import { FilterForm } from "../../components/FilterForm/FilterForm";
import { InputSearch } from "../../components/InputSearch/InputSearch";
import "./dashboard.scss";

export const Dashboard: React.FC = () => {
  return (
    <>
      <main className="dashboardMain">
        <FilterForm />
      </main>
    </>
  );
};
