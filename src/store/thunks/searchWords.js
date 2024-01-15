import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const searchWords = createAsyncThunk('words/search', async (word) => {
  const response = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  return response.data;
});

export { searchWords };
