import styled from "styled-components";

const Logo = () => (
  <Title>
    <Accent>Eco</Accent>Food
  </Title>
);

const Title = styled.h1`
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.primary};
  font-family: ${(p) => p.theme.fonts.main};
  font-size: 24px;
  font-weight: 700;
`;

const Accent = styled.span`
  color: ${(p) => p.theme.colors.accent};
`;

export default Logo;
