import { FaMagnifyingGlass } from "react-icons/fa6";
import { Field, Form, Formik, FormikHelpers } from "formik";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBar {
  setQuery: (query: string) => void;
}

interface FormValues {
  query: string;
}

const SearchBar: React.FC<SearchBar> = ({ setQuery }) => {
  const initialValues: FormValues = {
    query: "",
  };
  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    if (!values.query) {
      toast.error("Sorry, your input field can`t be empty!", {
        style: {
          color: "red",
        },
        duration: 3000,
        position: "top-right",
      });
      setSubmitting(false);
      return;
    }
    setQuery(values.query);
    setSubmitting(false);
  };

  return (
    <div>
      <header className={styles.header}>
        <Toaster />
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={styles.searchBar}>
            <button type="submit" className={styles.searchBtn}>
              <FaMagnifyingGlass />
            </button>
            <Field
              className={styles.searchInput}
              name="query"
              type="text"
              placeholder="Search images and photos"
            />
          </Form>
        </Formik>
      </header>
    </div>
  );
};

export default SearchBar;
