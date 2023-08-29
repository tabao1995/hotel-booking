import { configureStore } from "@reduxjs/toolkit";
import roomSliceReducer from "../features/slice/roomSlice";
import pageSliceReducer from "../features/slice/pageSlice";
import bookingSliceReducer from "../features/slice/bookingSlice";
import commentSlice from "../features/slice/commentSlice";
import authemSliceReducer from "../features/slice/AuthSlice";
export const store = configureStore({
  reducer: {
    room: roomSliceReducer,
    page: pageSliceReducer,
    booking: bookingSliceReducer,
    comment: commentSlice,
    authem: authemSliceReducer,
  },
});
