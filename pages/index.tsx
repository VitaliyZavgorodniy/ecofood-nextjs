import type { NextPage } from 'next';

import MainLayout from 'layouts/MainLayout';
import Section from 'components/UI-kit/containers/Section';
import LineCategory from 'components/LineCategory';

const DEFAULTLIST = [
  {
    id: '1',
    price: 4.00,
    discount: 6.00,
    weight: 500,
    rating: 4.5,
    image: 'img',
    title: 'Blackberry bluestem',
    url: 'product1',
  },
  {
    id: '2',
    price: 9.80,
    discount: 11.80,
    weight: 500,
    rating: 4.5,
    image: 'img',
    title: 'Blueberries',
    url: 'product2',
  },
  {
    id: '3',
    price: 6.80,
    discount: 9.80,
    weight: 500,
    rating: 4,
    image: 'img',
    title: 'White grapes muscat',
    url: 'product3',
  },
  {
    id: '4',
    price: 8.00,
    discount: 10.00,
    weight: 500,
    rating: 5,
    image: 'img',
    title: 'Yellow buckthorn',
    url: 'product4',
  },
  // {
  //   id: '4',
  //   price: 12.50,
  //   weight: 500,
  //   rating: 5,
  //   image: 'img',
  //   title: 'Raspberry',
  //   isSale: true,
  //   url: 'product4',
  // },
];

const Home: NextPage = () => {
  return (
    <MainLayout title="EcoFood | Best healthy and delicious food market">
      <Section>
        <LineCategory list={DEFAULTLIST} />
      </Section>
      <Section>Category</Section>
    </MainLayout>
  );
};

export default Home;
