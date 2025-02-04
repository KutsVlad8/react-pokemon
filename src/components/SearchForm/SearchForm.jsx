import { Formik } from 'formik';
import {
  FormContainer,
  StyledForm,
  StyledLabel,
  StyledField,
  Button,
} from './SearchForm.styled';

const SearchForm = ({ onSearch }) => {
  const initialValues = {
    type: '',
  };

  const handleSearch = values => {
    onSearch(values);
  };

  return (
    <FormContainer>
      <Formik initialValues={initialValues} onSubmit={handleSearch}>
        {() => (
          <StyledForm>
            <StyledLabel font-size="18">
              Select the Pokémon type:
              <StyledField as="select" name="type">
                <option value="">Select type</option>
                <option value="all">All</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="ice">Ice</option>
                <option value="grass">Grass</option>
                <option value="ground">Ground</option>
                <option value="steel">Steel</option>
                <option value="rock">Rock</option>
                <option value="bug">Bug</option>
                <option value="fighting">Fighting</option>
                <option value="electric">Electric</option>
                <option value="dark">Dark</option>
                <option value="psychic">Psychic</option>
                <option value="poison">Poison</option>
                <option value="ghost">Ghost</option>
                <option value="dragon">Dragon</option>
              </StyledField>
            </StyledLabel>

            <Button type="submit">Search</Button>
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
};

export default SearchForm;
