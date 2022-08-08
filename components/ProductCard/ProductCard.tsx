import Link from 'next/link';
import Image from 'next/image';

import { IProductCard } from 'interfaces/IProductCard';

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
  isSale,
  url,
}: IProductCard) => (
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
          {isSale ? <SaleBadge>On sale</SaleBadge> : null}
        </RatingWrapper>
      </TopBlock>

      <Title>{title}</Title>

      <BottomBlock>
        <button>Add +</button>

        <PriceWrapper>
          {price}
          {discount ?? discount}
          <div>/ {weight}g</div>
        </PriceWrapper>
      </BottomBlock>
    </Wrapper>
  </Link>
);

export default ProductCard;
