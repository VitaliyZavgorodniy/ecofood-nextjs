import Head from 'next/head';

import Header from 'components/Header';
import styled from 'styled-components';
import Cart from 'components/Cart';

interface LayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const MainLayout = ({ title, description, children }: LayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Cart />

    <Main>{children}</Main>
  </>
);

const Main = styled.main`
  width: 100%;
`;

export default MainLayout;
