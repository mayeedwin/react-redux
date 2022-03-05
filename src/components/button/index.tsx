import styled from "styled-components";

// Styled button...
const StyledButton = styled.button`
  background: #fafafa;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  color: #555;
  cursor: pointer;
`;

// Button component...
const Button = ({
  onClick,
  label = "Button",
}: {
  children: React.ReactNode;
  onClick: () => void;
  label?: string;
}) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
