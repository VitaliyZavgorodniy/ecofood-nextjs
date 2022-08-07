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
    title: 'product',
    isSale: true,
  },
  {
    id: '2',
    price: 123,
    weight: 500,
    rating: 4.5,
    image: 'img',
    title: 'product',
    isSale: true,
  },
  {
    id: '3',
    price: 123,
    weight: 500,
    rating: 4,
    image: 'img',
    title: 'product',
    isSale: true,
  },
  {
    id: '4',
    price: 123,
    weight: 500,
    rating: 5,
    image: 'img',
    title: 'product',
    isSale: true,
  },
];

const Home: NextPage = () => {
  return (
    <MainLayout title="EcoFood | Best healthy and delicious food market">
      <Section>
        <LineCategory list={DEFAULTLIST} />
      </Section>
      <Section>
        Category
      </Section>
    </MainLayout>
  );
};

export default Home;
