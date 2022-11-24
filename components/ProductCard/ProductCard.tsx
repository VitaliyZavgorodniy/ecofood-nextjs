import Link from 'next/link';
import Image from 'next/image';
import { MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useAppDispatch } from 'redux/store';

import { cartActions, cartSelectors } from 'redux/cart';

import { IProductData } from 'interfaces/IProductData';

import {
  Wrapper,
  Container,
  TopBlock,
  Title,
  Rating,
  StarIcons,
  StarRating,
  SaleBadge,
  RatingWrapper,
  BottomBlock,
  PriceWrapper,
  Discount,
  Price,
  Weight,
  ClearButton,
  PlusIcon,
} from './ProductCard.styles';

import testimage from 'assets/white_grapes_muscat.png';

const ProductCard = ({ ...data }: IProductData) => {
  const dispatch = useAppDispatch();

  const cart = useSelector((state: RootState) => cartSelectors.getCart(state));

  const handleAddToCart = (e: MouseEvent) => {
    e.preventDefault();

    dispatch(cartActions.addItem(data));
  };

  const renderCard = ({
    title,
    price,
    discount,
    weight,
    rating,
    image,
    url,
  }: IProductData) => (
    <Wrapper>
      <Container />

      <TopBlock>
        <Image src={testimage} alt={title} width="116" height="114" />
        <RatingWrapper>
          <Rating>
            <StarIcons />
            <StarRating>{rating}/5</StarRating>
          </Rating>
          {discount && <SaleBadge>On sale</SaleBadge>}
        </RatingWrapper>
      </TopBlock>

      <Title>{title}</Title>

      <BottomBlock>
        <ClearButton onClick={handleAddToCart}>
          Add <PlusIcon />
        </ClearButton>

        <PriceWrapper>
          <Discount>{discount && discount.toFixed(2)}</Discount>
          <Price>$ {price.toFixed(2)}</Price>
          <Weight>/ {weight}g</Weight>
        </PriceWrapper>
      </BottomBlock>
    </Wrapper>
  );

  return <Link href={`/product/${data.url}`}>{renderCard(data)}</Link>;
};

export default ProductCard;
