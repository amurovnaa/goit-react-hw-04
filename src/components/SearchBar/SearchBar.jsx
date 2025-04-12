import { Field, Form, Formik } from "formik";
import { toast } from "react-hot-toast";

const SearchBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values, options) => {
    if (values.query.trim() === "") {
      toast.error("Enter a keyword");
      return;
    }

    handleChangeQuery(values.query);
    options.resetForm();
  };
  return (
    <section>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </section>
  );
};
export default SearchBar;
