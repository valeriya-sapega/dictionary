import { createSelector } from '@reduxjs/toolkit';

const selectWordsState = (state) => state.words;

export const filterSelector = createSelector(
  [selectWordsState],
  ({ data, filterWord }) => {
    const wordToFilter = filterWord;
    const filteredWords = data.filter((word) =>
      word.term.toLowerCase().includes(wordToFilter.toLowerCase())
    );
    return {
      data: filteredWords,
      filterWord: wordToFilter,
    };
  }
);
