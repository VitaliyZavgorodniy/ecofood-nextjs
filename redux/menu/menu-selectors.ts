import { RootState } from 'redux/store';

const statusCartMenu = (state: RootState) => state.menu.isOpenCartMenu;

const menuSelectors = {
  statusCartMenu,
};

export default menuSelectors;
