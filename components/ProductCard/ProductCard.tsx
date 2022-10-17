import Link from 'next/link';
import Image from 'next/image';
import { MouseEvent } from 'react';

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

const ProductCard = ({
  id,
  title,
  price,
  discount,
  weight,
  rating,
  image,
  url,
}: IProductData) => {
  const handleAddToCart = (e: MouseEvent) => {
    e.preventDefault();
    console.log('Added to Cart:', title);
  };

  return (
    <Link href={`/product/${url}`}>
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
    </Link>
  );
};

export default ProductCard;
