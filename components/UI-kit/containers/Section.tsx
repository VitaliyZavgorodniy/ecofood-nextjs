import styled from 'styled-components';

const Section = ({ children }: { children: React.ReactNode }) => (
  <Wrapper>{children}</Wrapper>
);

const Wrapper = styled.section`
  width: 1170px;
  margin: 0 auto;
`;

export default Section;
