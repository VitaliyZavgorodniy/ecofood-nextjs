import { Wrapper } from './Cart.styles';

import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useAppDispatch } from 'redux/store';

import { menuActions, menuSelectors } from 'redux/menu';

const Cart = () => {
  const dispatch = useAppDispatch();

  const isOpen = useSelector((state: RootState) =>
    menuSelectors.statusCartMenu(state)
  );

  const handleToggleCart = () => dispatch(menuActions.toggleCartMenu());

  return (
    <Wrapper isOpen={isOpen} onClick={handleToggleCart}>
      CART
    </Wrapper>
  );
};

export default Cart;
