import React from "react";
import ButtonPrimaryStyled from "./ButtonPrimaryStyled";

interface ButtonPrimaryProps {
  type: "contained" | "outlined";
  label: string;
  action: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  type,
  label,
  action,
}) => {
  return (
    <ButtonPrimaryStyled onClick={action} type={type}>
      {label}
    </ButtonPrimaryStyled>
  );
};

export default ButtonPrimary;
