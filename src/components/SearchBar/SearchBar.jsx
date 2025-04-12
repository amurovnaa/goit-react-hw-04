import { Field, Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import { useId } from "react";
import s from "./SearchBar.module.css";

const SearchBar = ({ handleChangeQuery }) => {
  const keywordId = useId();
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
    <header className="section">
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.formContainer}>
          <div className={s.inputWrapper}>
            <label className={s.inputName} htmlFor={keywordId}>
              Search images
            </label>
            <Field
              className={s.input}
              name="query"
              id={keywordId}
              placeholder="Enter a keyword:"
            />
          </div>
          <button className={s.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;
