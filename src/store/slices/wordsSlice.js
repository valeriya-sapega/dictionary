import { createSelector, createSlice, nanoid } from '@reduxjs/toolkit';

const words =
  localStorage.getItem('data') !== null
    ? JSON.parse(localStorage.getItem('data'))
    : [];

const wordsSlice = createSlice({
  name: 'words',
  initialState: {
    data: words,
    filterWord: '',
  },
  reducers: {
    addWord(state, action) {
      state.data.push({
        term: action.payload.term,
        definition: action.payload.definition,
        phonetic: action.payload.phonetic,
        sourceUrls: action.payload.sourceUrls,
        id: nanoid(),
      });

      localStorage.setItem(
        'data',
        JSON.stringify(state.data.map((item) => item))
      );
    },
    removeWord(state, action) {
      const updated = state.data.filter((word) => {
        return word.id !== action.payload;
      });
      state.data = updated;
      localStorage.setItem(
        'data',
        JSON.stringify(state.data.map((item) => item))
      );
    },
    sortWords(state, action) {
      let sorted = [...state.data].sort((a, b) => {
        const termA = a.term.toUpperCase();
        const termB = b.term.toUpperCase();
        if (action.payload === 'AZ') {
          if (termA < termB) return -1;
          if (termA > termB) return 1;
        } else if (action.payload === 'ZA') {
          if (termA < termB) return 1;
          if (termA > termB) return -1;
        }
        return 0;
      });
      state.data = sorted;
    },
    reset(state) {
      state.data = [];
      localStorage.clear();
    },
    filterByWord(state, action) {
      state.filterWord = action.payload;
    },
  },
});


export const wordsReducer = wordsSlice.reducer;
export const { addWord, removeWord, sortWords, reset, filterByWord } =
  wordsSlice.actions;
