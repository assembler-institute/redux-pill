import "./filterForm.scss";
import { Formik } from "formik";
import { setPropertiesByCountryOrCity } from "../../redux/properties/actions";

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
  setPropertiesByCountryOrCity("asd");
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
