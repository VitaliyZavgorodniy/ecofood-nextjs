import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMenusData } from 'interfaces/IMenusData';

const initialState: IMenusData = {
  isOpenCartMenu: false,
};

const menuSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartMenu: (state) => {
      state.isOpenCartMenu = !state.isOpenCartMenu;
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;