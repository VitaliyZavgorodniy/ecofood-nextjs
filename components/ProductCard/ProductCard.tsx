import styled from "styled-components";

import { ICategoryProduct } from "interfaces/ICategoryProduct";

const ProductCard = ({
  id,
  title,
  price,
  discount,
  weight,
  rating,
  image,
  isSale,
}: ICategoryProduct) => (
  <Wrapper>
    <img src={image} />
    <h3>{title}</h3>
    <div>
      {price}
      {discount ?? discount}
    </div>
    <div>/ {weight}g</div>
    <div>{rating} / 5</div>
    {isSale ? <div>Sale</div> : null}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
`;

export default ProductCard;
