import { configureStore } from '@reduxjs/toolkit';
import apiSlice from "./redux/apiSlice"
import cartSlice from './redux/cartSlice';
import counterSlice from "./redux/counterSlice"
const store = configureStore({
  reducer: {
    api: apiSlice,
    cart:cartSlice,
    count:counterSlice
  },
});

export default store;