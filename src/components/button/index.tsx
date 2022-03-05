import styled from "styled-components";

// Styled button...
const StyledButton = styled.button`
  background: #fafafa;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  color: #555;
  cursor: pointer;
  padding: 8px 16px;
  text-align: center;
  &:hover {
    background: black;
    color: white;
  }
`;

// Button component...
const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label?: string;
}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
