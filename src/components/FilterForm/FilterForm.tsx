import "./filterForm.scss";
import { Formik } from "formik";

type PriceRange = [number, number | null];
type MoreFilters = {
  heatingSystem: boolean;
  coolingSystem: boolean;
  hasPool: boolean;
};

interface IFilterValues {
  typeHome: string;
  conditions: string;
  beedroms: number;
  baths: number;
  priceRange: PriceRange;
  publishDate: string;
  hasParking: boolean;
  more: MoreFilters;
}

const initialValues: IFilterValues = {
  typeHome: "",
  conditions: "",
  beedroms: 2,
  baths: 1,
  priceRange: [20000, null],
  publishDate: "",
  hasParking: false,
  more: {
    hasPool: false,
    heatingSystem: false,
    coolingSystem: false,
  },
};

export const FilterForm: React.FC = () => {
  return (
    <>
      <h1 className="dashTitle">Filter dashboard:</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      ></Formik>
    </>
  );
};
