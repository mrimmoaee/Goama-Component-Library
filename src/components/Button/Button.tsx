import React from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  label: string;
}

const ButtonStyle = styled.div`
  background-color: red;
  color: white;
  padding: 10px;
`;

const Button = (props: ButtonProps) => {
  return <ButtonStyle>{props.label}</ButtonStyle>;
};

export default Button;
