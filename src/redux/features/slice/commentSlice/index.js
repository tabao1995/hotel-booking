import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CommentApi } from "../../../../api/api";

const initialState = {
  commentState: [],
  isLoading: false,
};

export const fecthCommentByRoomId = createAsyncThunk(
  "commentSlice/fecthCommentByRoomId",
  async (id) => {
    const data = await CommentApi.getCommentByRoomID(id); // Sửa tên hàm
    return data;
  }
);

export const addcomment = createAsyncThunk(
  "commentSlice/addNewcomment",
  async (comment) => {
    await CommentApi.addComment(comment);
    return comment;
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fecthCommentByRoomId.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fecthCommentByRoomId.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fecthCommentByRoomId.fulfilled, (state, action) => {
        state.commentState = action.payload;
        state.isLoading = false;
      })
      .addCase(addcomment.fulfilled, (state, action) => {
        state.commentState.push(action.payload);
      });
  },
});

export default commentSlice.reducer;
