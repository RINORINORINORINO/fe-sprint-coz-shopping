import { createSlice } from "@reduxjs/toolkit";

// const tabsSlice = createSlice({
//   name: "tabs",
//   initialState: "all",
//   reducers: {
//     setTab: (state, action) => action.payload,
//   },
// });

export const tabsSlice = createSlice({
  name: "tabs",
  initialState: {
    currentTab: "all",
  },
  reducers: {
    setTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
});

export const { setTab } = tabsSlice.actions;
export default tabsSlice.reducer;
