import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RoomApi } from "../../../../api/api";

const initialState = {
  roomState: [],
  currentRoomState: [],
  isRoomLoading: false,
  isRoomDetailLoading: false,
};
export const fetchRoomInfo = createAsyncThunk(
  "roomSlice/fetchRoomInfo",
  async () => {
    const data = await RoomApi.getRoomsInfo();
    return data;
  }
);
export const fetchRoomInfoByName = createAsyncThunk(
  "roomSlice/fetchRoomInfoByName",
  async (name) => {
    const data = await RoomApi.getRoomInfoByName(name);
    return data;
  }
);
export const roomSlice = createSlice({
  name: "roomState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRoomInfo.pending, (state, action) => {
      state.isRoomLoading = true;
    });
    builder.addCase(fetchRoomInfo.rejected, (state, action) => {
      state.isRoomLoading = false;
    });
    builder.addCase(fetchRoomInfo.fulfilled, (state, action) => {
      state.roomState = action.payload;
      state.isRoomLoading = false;
    });
    builder.addCase(fetchRoomInfoByName.pending, (state, action) => {
      state.isRoomDetailLoading = true;
    });
    builder.addCase(fetchRoomInfoByName.rejected, (state, action) => {
      state.isRoomDetailLoading = false;
    });
    builder.addCase(fetchRoomInfoByName.fulfilled, (state, action) => {
      state.currentRoomState = action.payload;
      state.isRoomDetailLoading = false;
    });
  },
});
export default roomSlice.reducer;
