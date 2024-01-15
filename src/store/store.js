import { configureStore } from '@reduxjs/toolkit';
import { changeSearchTerm, searchReducer } from './slices/searchSlice';
import {
  wordsReducer,
  addWord,
  removeWord,
  sortWords,
  filterByWord,
  reset,
  selectFilteredWords,
} from './slices/wordsSlice';
import { fontReducer, changeFont } from './slices/fontSlice';
import { filterSelector } from './selectors/filterSelector';

const store = configureStore({
  reducer: {
    fetchedWord: searchReducer,
    words: wordsReducer,
    font: fontReducer,
  },
});

export {
  store,
  changeSearchTerm,
  addWord,
  removeWord,
  sortWords,
  filterByWord,
  reset,
  selectFilteredWords,
  changeFont,
  filterSelector,
};
export * from './thunks/searchWords';
