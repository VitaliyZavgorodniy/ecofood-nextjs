import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProductCart } from 'interfaces/IProductData';

const initialState: IProductCart[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.push(payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state = state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
