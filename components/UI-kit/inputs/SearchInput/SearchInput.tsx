import styled from "styled-components";

import { RiSearchLine } from "react-icons/ri";

interface InputProps {
  value?: string;
  onChange?: () => void;
}

const SearchInput = ({ value, onChange }: InputProps) => (
  <Wrapper>
    <Icon />
    <Input value={value} onChange={onChange} placeholder='Search' />
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
`;

const Icon = styled(RiSearchLine)`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  color: ${(p) => p.theme.colors.primary};
`;

const Input = styled.input`
  padding: 12px 16px;
  border: none;
  border-radius: 5px;
  width: 160px;
  background-color: ${(p) => p.theme.colors.light};
  transition: ${(p) => p.theme.transitions.main} width;

  &:active,
  &:focus {
    width: 320px;
  }

  &::placeholder {
    color: ${(p) => p.theme.colors.holder};
    font-weight: 600;
  }
`;

export default SearchInput;
