import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: [],
  reducers: {
    addBookmark: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index === -1) {
        state.unshift(action.payload);
      }
    },
    removeBookmark: (state, action) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
