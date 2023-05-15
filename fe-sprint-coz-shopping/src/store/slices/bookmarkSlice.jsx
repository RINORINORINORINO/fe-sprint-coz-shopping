import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: bookmark,
  initialState: [],
  reducers: {
    addToBookmark: (state, action) => {
      state.push(action.payload);
    },
    removeToBookmark: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addToBookmark, removeToBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
