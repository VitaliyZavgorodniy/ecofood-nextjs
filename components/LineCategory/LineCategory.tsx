import styled from "styled-components";

import { ICategoryProduct } from "interfaces/ICategoryProduct";

import ProductCard from "components/ProductCard";

interface LineCategoryProps {
  list: ICategoryProduct[];
}

const LineCategory = ({ list }: LineCategoryProps) => {
  const renderList = () => {
    const elementHTML = list.map((item) => (
      <Item key={item.id}>
        <ProductCard {...item} />
      </Item>
    ));

    return elementHTML;
  };

  return <List>{renderList()}</List>;
};

const List = styled.ul``;

const Item = styled.li``;

export default LineCategory;
