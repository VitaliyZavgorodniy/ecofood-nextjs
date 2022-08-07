import styled from 'styled-components';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const CommonButton = ({ title, onClick }: ButtonProps) => (
  <Button onClick={onClick}>{title}</Button>
);

const Button = styled.button`
  padding: 6px 9px;
  color: ${(p) => p.theme.colors.contrast};
  background-color: ${(p) => p.theme.colors.alt};
  border-radius: 5px;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  transition: ${(p) => p.theme.transitions.main} background-color;

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.accent};
  }
`;

export default CommonButton;
