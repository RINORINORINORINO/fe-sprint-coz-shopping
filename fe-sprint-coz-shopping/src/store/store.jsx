import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";
import cozDataReducer from "./slices/fetchDataSlice";
import bookmarksReducer from "./slices/bookmarkSlice";

export const store = configureStore({
  reducer: { menu: menuSlice, cozData: cozDataReducer, bookmarks: bookmarksReducer },
});

//cozDataSlice와 cozDataReducer의 차이
//cozDataSlice는 슬라이스 객체를, cozDataReducer는 슬라이스의 reducer를 직접 가리킴
//현재 데이터를 받아오는 리듀서가 직접적으로 필요한 상황이기에
//cozDataSlice 대신 cozDataReducer를 사용
//만약 cozDataSlice를 사용하면 받아온 데이터를 제대로 활용할 수 없음
