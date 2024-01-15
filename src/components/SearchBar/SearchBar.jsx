import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm, searchWords } from '../../store/store';
import InputField from '../InputField/InputField';
import { useEffect, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import './SearchBar.css';

const SearchBar = () => {
  const [isValidInput, setIsValidInput] = useState(true);

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const { searchTerm, fetchedWord, isLoading, error } = useSelector(
    (state) => state.fetchedWord
  );

  useEffect(() => {
    if (!fetchedWord && !isLoading) dispatch(searchWords(searchTerm));
  }, []);

  useClickOutside(inputRef, setIsValidInput, true);

  const handleSearchChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
    setIsValidInput(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      dispatch(searchWords(searchTerm));
      setIsValidInput(true);
    }
    if (!searchTerm) {
      setIsValidInput(false);
    }
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <InputField
          className={(!isValidInput || error) && 'error'}
          handleChange={handleSearchChange}
          searchTerm={searchTerm}
          handleSubmit={handleSubmit}
          placeholder="Search for a word..."
          ref={inputRef}
        />
      </form>
      {!isValidInput && !error && (
        <div className="searchbar__error">Whoops, can't be empty...</div>
      )}
    </div>
  );
};
export default SearchBar;
