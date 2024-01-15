import { createSlice } from '@reduxjs/toolkit';
import { searchWords } from '../thunks/searchWords';

const searchSlice = createSlice({
  name: 'fetchedWord',
  initialState: {
    searchTerm: 'hello',
    fetchedWord: null,
    error: null,
    isLoading: false,
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(searchWords.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchWords.fulfilled, (state, action) => {
      state.fetchedWord = action.payload[0];
      state.isLoading = false;
      state.searchTerm = '';
      state.error = null;
    });
    builder.addCase(searchWords.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { changeSearchTerm } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
