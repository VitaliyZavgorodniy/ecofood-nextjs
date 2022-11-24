// import { connect } from 'react-redux';

// import { IProductCart } from 'interfaces/IProductData';
// import { RootState, AppDispatch } from 'redux/store';
// import { cartActions, cartSelectors } from 'redux/cart';

// import ProductCard from './ProductCard';

// const mapStateToProps = (state: RootState) => ({
//   cart: cartSelectors.getCart(state),
// });

// const mapDispatchToProps = (dispatch: AppDispatch) => ({
//   addToCart: (data: IProductCart) => dispatch(cartActions.addItem(data)),
//   removeFromCart: (id: string) => dispatch(cartActions.removeItem(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
export { default } from './ProductCard';
