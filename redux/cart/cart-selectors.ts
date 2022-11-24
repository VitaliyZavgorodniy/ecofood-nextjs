import { RootState } from 'redux/store';

const getCart = (state: RootState) => state.cart;

const cartSelectors = {
  getCart, 
};

export default cartSelectors;
