import styled from "styled-components";

interface LayoutProps {
  title: string;
  icon: React.ReactElement;
  onClick: () => void;
}

const ClearButton = ({ title, icon, onClick }: LayoutProps) => (
  <Button onClick={onClick}>
    {icon}
    {title}
  </Button>
);

const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.primary};
  font-family: ${(p) => p.theme.fonts.main};
  font-size: 16px;
  font-weight: 600;
  border: none;
  background-color: transparent;
  transition: ${(p) => p.theme.transitions.main} color;

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.colors.accent};
  }

  & > svg {
    margin-right: 5px;
    font-size: 24px;
  }
`;

export default ClearButton;
