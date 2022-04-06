import "./filterForm.scss";
import { Formik, Field } from "formik";

const initialValues: IFilterValues = {
  type: "",
  condition: "",
  room: 2,
  bath: 1,
  priceRange: [20000, null],
  more: {
    pet: true,
    garden: false,
    air_conditioning: true,
    swimming_pool: false,
    terrace: true,
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
