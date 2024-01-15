import { createSlice } from '@reduxjs/toolkit';

const font =
  localStorage.getItem('font') !== null
    ? JSON.parse(localStorage.getItem('font'))
    : {
        name: 'Sans Serif',
        font: `'Inter', sans-serif`,
      };

const fontSlice = createSlice({
  name: 'font',
  initialState: {
    fontFamily: font,
  },
  reducers: {
    changeFont(state, action) {
      state.fontFamily = action.payload;
      localStorage.setItem('font', JSON.stringify(state.fontFamily));
    },
  },
});

export const { changeFont } = fontSlice.actions;
export const fontReducer = fontSlice.reducer;
