import { Wrapper, Icon, Title } from './CartButton.styles';

import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useAppDispatch } from 'redux/store';
import { cartSelectors } from 'redux/cart';
import { menuActions } from 'redux/menu';

import IconShoppingBag from 'assets/icons/shopping-bag.svg';

const CartButton = () => {
  const dispatch = useAppDispatch();

  const cart = useSelector((state: RootState) => cartSelectors.getCart(state));

  const handleToggleCart = () => dispatch(menuActions.toggleCartMenu());

  return (
    <Wrapper onClick={handleToggleCart}>
      <Icon>{/* <IconShoppingBag /> */}</Icon>
      <Title>Cart: {cart.length}</Title>
    </Wrapper>
  );
};

export default CartButton;
