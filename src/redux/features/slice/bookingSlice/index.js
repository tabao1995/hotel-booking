import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BookingApi } from "../../../../api/api";

const initialState = {
  bookingState: [],
  isLoading: false,
};

export const fetchBooking = createAsyncThunk(
  "bookingSlice/fetchBooking",
  async () => {
    const data = await BookingApi.getBooking();
    return data;
  }
);
export const updateBookingConfirmation = createAsyncThunk(
  "bookingSlice/updateBookingConfirmation",
  async (confirmCode) => {
    // Gọi API hoặc hành động cập nhật tại đây
    await BookingApi.updateBooking(confirmCode);
  }
);
export const cancelBooking = createAsyncThunk(
  "bookingSlice/cancelBooking",
  async (confirmCode) => {
    await BookingApi.deleteBooking(confirmCode);
    return fetchBooking();
  }
);

export const addNewBooking = createAsyncThunk(
  "bookingSlice/addNewBooking",
  async (booking) => {
    await BookingApi.addNewBooking(booking);
    return fetchBooking();
  }
);

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooking.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchBooking.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchBooking.fulfilled, (state, action) => {
        state.bookingState = action.payload;
        state.isLoading = false;
      })
      .addCase(addNewBooking.fulfilled, (state, action) => {
        state.bookingState.push(action.payload);
      })
      .addCase(updateBookingConfirmation.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default bookingSlice.reducer;
