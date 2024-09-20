import { configureStore } from '@reduxjs/toolkit';
import npmReducer from './npmSlice';

export const store = configureStore({
  reducer: {
    npm: npmReducer,
  },
});
