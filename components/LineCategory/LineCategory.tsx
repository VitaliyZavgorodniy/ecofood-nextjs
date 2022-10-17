import { IProductData } from 'interfaces/IProductData';

import ProductCard from 'components/ProductCard';

import { List, Item } from './LineCategory.styles';

interface LineCategoryProps {
  list: IProductData[];
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

export default LineCategory;
