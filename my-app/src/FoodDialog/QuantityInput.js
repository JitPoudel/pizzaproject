import React from "react";
import styled from "styled-components";
import { websiteRedAlternative } from "../Styles/colors"; //changed color from PizzaRed to websiteRedAlternative to disply -/+ button on checkout

const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 24px;
  text-align: center;
  border: none;
  outline: none;
  background-color: #e4dcdc;
`;

const IncrementContainer = styled.div`
  display: flex;
  height: 24px;
`;

const IncrementButton = styled.div`
  width: 23px;
  color: ${websiteRedAlternative};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  border: 1px solid ${websiteRedAlternative};
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5; 
   pointer-events: none; 
   `}
  &:hover {
    background-color: #420600;
  }
`;

export function QuantityInput({ quantity }) {
  return (
    <IncrementContainer>
      <div>Quantity:</div>
      <IncrementButton
        onClick={() => {
          quantity.setvalue(quantity.value - 1);
        }}
        disabled={quantity.value === 1}>
        -
      </IncrementButton>
      <QuantityInputStyled {...quantity} />
      <IncrementButton
        onClick={() => {
          quantity.setvalue(quantity.value + 1);
        }}>
        {" "}
        +
      </IncrementButton>
    </IncrementContainer>
  );
}
