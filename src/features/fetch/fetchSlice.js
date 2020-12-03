//createAsyncThunkをimportするだけで非同期処理を実行できる
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

//非同期の関数。非同期の処理を書く場合は、Sliceの外に書く！！
export const fetchAsyncGet = createAsyncThunk("fetch/get", async () => {
  const res = await axios.get(apiUrl);
  return res.data; /* action payload */
});

const fetchSlice = createSlice({
  name: "fetch",
  initialState: { users: [] },
  reducers: {},
  //APIの処理が終わったあとの処理。
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
      return {
        ...state,
        users: action.payload /* return res.data */,
      };
    });
  },
});

export const selectUsers = (state) => state.fetch.users;
export default fetchSlice.reducer;

//createAsyncThunkが非同期の処理を終えた後に、処理が成功した場合(fulfilled)、処理が途中の場合(pending)、処理が失敗した場合(widgeted)を自動で返す。
