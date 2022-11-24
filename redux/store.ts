import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { cartReducer } from './cart';
import { menuReducer } from './menu';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
