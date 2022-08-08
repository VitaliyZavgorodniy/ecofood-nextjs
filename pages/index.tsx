import type { NextPage } from 'next';

import MainLayout from 'layouts/MainLayout';
import Section from 'components/UI-kit/containers/Section';
import LineCategory from 'components/LineCategory';

const DEFAULTLIST = [
  {
    id: '1',
    price: 123,
    discount: 200,
    weight: 500,
    rating: 4.5,
    image: 'img',
    title: 'Blackberry bluestem',
    isSale: true,
    url: 'product1',
  },
  {
    id: '2',
    price: 123,
    weight: 500,
    rating: 4.5,
    image: 'img',
    title: 'Blueberries',
    isSale: true,
    url: 'product2',
  },
  {
    id: '3',
    price: 123,
    weight: 500,
    rating: 4,
    image: 'img',
    title: 'White grapes muscat',
    isSale: true,
    url: 'product3',
  },
  {
    id: '4',
    price: 123,
    weight: 500,
    rating: 5,
    image: 'img',
    title: 'Yellow buckthorn',
    isSale: true,
    url: 'product4',
  },
  {
    id: '4',
    price: 123,
    weight: 500,
    rating: 5,
    image: 'img',
    title: 'Raspberry',
    isSale: true,
    url: 'product4',
  },
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
