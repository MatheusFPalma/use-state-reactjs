import { styled } from "styled-components";

interface ButtonPrimaryStyledProps {
  type: "contained" | "outlined";
}

const ButtonPrimaryStyled = styled.button<ButtonPrimaryStyledProps>`
  border-radius: ${(props) => props.theme.borderRadius};
  border: ${(props) => props.theme.border};
  border-color: ${(props) => props.theme.colors.primary};
  border-style: solid;
  color: ${(props) =>
    props.type === "contained"
      ? props.theme.colors.text
      : props.theme.colors.primary};
  background-color: ${(props) =>
    props.type === "contained" ? props.theme.colors.primary : "inherit"};

  &:hover {
    background-color: white;
    color: ${(props) => props.theme.colors.text};
    border-color: white;
  }
`;

export default ButtonPrimaryStyled;
