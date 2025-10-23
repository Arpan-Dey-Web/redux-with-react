import { configureStore } from "@reduxjs/toolkit";
import counterSliece from "../features/counter/counterSlice";
import userReducer from "../features/users/userSlice";

const store = configureStore({
  reducer: {
    counter: counterSliece,
    users: userReducer,
  },
});
export default store;
