import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const Wrapper = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: ${(p) => (p.isOpen ? 'flex' : 'none')};
  background: #00000040;
`;
