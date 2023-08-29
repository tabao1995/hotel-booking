import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthemApi } from "../../../../api/api";

const initialState = {
  data: [],
  isLogin: false,
  isLoading: false,
  isRegister: false,
  userInfo: {},
  isConfirm: false,
};
export const checkAuthem = createAsyncThunk(
  "AuthSlice/checkAuthem",
  async ({ userName, password }) => {
    const data = await AuthemApi.Authem(userName, password);
    return data;
  }
);
export const activeUser = createAsyncThunk(
  "AuthSlice/getInfoByID",
  async (id) => {
    await AuthemApi.activeUser(id);
  }
);
export const getInfoByID = createAsyncThunk(
  "AuthSlice/getInfoByID",
  async (id) => {
    const data = await AuthemApi.getUserInfoByUserName(id);
    return data;
  }
);
export const register = createAsyncThunk("AuthSlice/register", async (data) => {
  try {
    const response = await AuthemApi.Register(data);
    return response;
  } catch (error) {
    throw error;
  }
});
const authemSlice = createSlice({
  name: "authem",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkAuthem.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(checkAuthem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      if (state.data.length === 0) {
        state.isLogin = false;
      } else {
        state.isLogin = true;
        if (state.data.isConfirm) {
          state.isConfirm = true;
        } else {
          state.isConfirm = false;
        }
      }
    });
    builder.addCase(checkAuthem.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message; // Lưu thông điệp lỗi vào trạng thái
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isRegister = action.payload;
    });
    builder.addCase(getInfoByID.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});
export default authemSlice.reducer;
