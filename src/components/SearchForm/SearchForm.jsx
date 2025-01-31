import { Formik, Form, Field } from 'formik';

const SearchForm = ({ onSearch }) => {
  const initialValues = {
    type: '',
  };

  const handleSearch = values => {
    onSearch(values);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSearch}>
        {() => (
          <Form>
            <label>
              Выберите тип покемона:
              <Field as="select" name="type">
                <option value="">Выберете тип</option>
                <option value="all">Все</option>
                <option value="fire">Огонь</option>
                <option value="water">Вода</option>
                <option value="grass">Трава</option>
                <option value="electric">Электричество</option>
              </Field>
            </label>

            <button type="submit">Поиск</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SearchForm;
