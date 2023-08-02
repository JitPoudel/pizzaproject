import styled from "styled-components";
import React from "react";

const BuildingToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const BuildingToppingCheckbox = styled.input`
  margin-right: 11 px;
  cursor: pointer;
`;
const BuildingCheckboxLabel = styled.label`
  cursor: pointer;
`;

export function Toppings({ toppings, checkTopping }) {
  return (
    <BuildingToppingGrid>
      {toppings.map((topping, i) => (
        // may not be best practice to make key index value
        <BuildingCheckboxLabel key={i}>
          <BuildingToppingCheckbox
            type="checkbox"
            defaultChecked={topping.checked}
            onClick={() => {
              checkTopping(i);
            }}
          />
          {topping.name}
        </BuildingCheckboxLabel>
      ))}
    </BuildingToppingGrid>
  );
}
