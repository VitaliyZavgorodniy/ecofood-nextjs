import styled from "styled-components";
import { breakpoints } from "constants/breakpoints";

import Navigation from "components/Navigation";

const Header = () => (
  <Container>
    <Navigation />
  </Container>
);

const Container = styled.header`
  margin: 0 auto;
  width: 280px;

  @media ${breakpoints.desktop} {
    width: 1170px;
    padding: 15px 0;
  }
`;

export default Header;
