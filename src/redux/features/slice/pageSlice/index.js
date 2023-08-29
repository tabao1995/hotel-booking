import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pageApi } from "../../../../api/api";

const initialState = {
  pageState: [],
  isPageLoading: false,
};
export const fetchPageInfo = createAsyncThunk(
  "pageSlice/fetchPageInfo",
  async (title) => {
    const data = await pageApi.getPageInfoBytitle(title);
    return data;
  }
);
export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPageInfo.pending, (state, action) => {
      state.isPageLoading = true;
    });
    builder.addCase(fetchPageInfo.rejected, (state, action) => {
      state.isPageLoading = false;
    });
    builder.addCase(fetchPageInfo.fulfilled, (state, action) => {
      state.pageState = action.payload;
      state.isPageLoading = false;
    });
  },
});
export default pageSlice.reducer;
