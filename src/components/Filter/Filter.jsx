import PropTypes from 'prop-types';
import { SearchInputBox, SearchLabel, SearchWrapper } from './Filter.styled';

export const Filter = ({ handleFilter }) => {
  return (
    <SearchWrapper>
      <SearchLabel>Find contacts by name</SearchLabel>
      <SearchInputBox
        name="filter"
        onChange={handleFilter}
        type="text"
        placeholder="Search for a contact"
      />
    </SearchWrapper>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
