import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("cozData/fetchData", async () => {
  const { data } = await axios.get("http://cozshopping.codestates-seb.link/api/v1/products");
  return data;
});

export const fetchNewData = createAsyncThunk("cozData/fetchNewData", async (id) => {
  const { data } = await axios.get(`http://cozshopping.codestates-seb.link/api/v1/products/${id}`);
  return data;
});

//createAsyncThunk => 리덕스 썽크를 생성하는 함수, 첫 번째 매개변수로 액션 타입 / 두 번째 매개변수로 비동기 작업을 수행하는 함수 >>> 주로 API를 받아올 때

export const cozDataSlice = createSlice({
  name: "cozData",
  initialState: { allData: [], data: [], status: "idle", error: null },
  //status는 현재 데이터의 상태를 나타냄
  //idle => 아무런 요청이 일어나지 않은 상태
  //loading => 데이터를 요청중인 상태
  //succeeded => 데이터 요청이 성공한 상태
  //failed => 데이터 요청이 실패한상태
  reducers: {
    removeItem: (state, action) => {
      state.data = state.data.filter((el) => el.id !== action.payload.id);
    },
    restoreItem: (state, action) => {
      const item = state.allData.find((el) => el.id === action.payload.id);
      if (item) {
        state.data.push(item);
      }
    },
  },
  extraReducers: (builder) => {
    //슬라이스 외부에서 가져오는 액션을 처리하는 리듀서를 정의하는데 사용되는 객체 createSlice 함수에 포함되어있음
    //주로 비동기 작업을 수행하는 액션, 예를 들어 createAsyncThunk로 생성하는 액션 처리에 유용
    builder
      //extraReducers의 콜백함수에 전달되는 인자
      //리듀서 로직을 추가하는데 사용되는 객체
      .addCase(fetchData.pending, (state) => {
        //특정 액션에 대한 리듀서를 추가
        state.status = "loading";
        state.data = [];
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.concat(action.payload);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { removeItem, restoreItem } = cozDataSlice.actions;
export default cozDataSlice.reducer;
