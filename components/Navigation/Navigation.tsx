import styled from "styled-components";
import { breakpoints } from "constants/breakpoints";

import { CgMenuGridO } from "react-icons/cg";

import Logo from "components/Logo";
import SearchInput from "components/UI-kit/inputs/SearchInput";
import ClearButton from "components/UI-kit/buttons/ClearButton";

const Navigation = () => (
  <Nav>
    <Wrapper>
      <Logo />
      <InputContainer>
        <SearchInput />
      </InputContainer>
      <ClearButton
        title='Categories'
        icon={<CgMenuGridO />}
        onClick={() => console.log("go cat")}
      />
    </Wrapper>

    <Wrapper>
      <div>Bonus</div>
      <div>User</div>
      <div>Cart</div>
    </Wrapper>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InputContainer = styled.div`
  margin: 0 40px;
`;

export default Navigation;
