import React from "react";
import styled from "styled-components";

const CursorPointer = `cursor: pointer`;

const RadioInput = styled.input`
  ${CursorPointer}
`;

const Label = styled.label`
  ${CursorPointer}
`;

let uniqueKey = 0;

export function Choices({ openFood, choiceRadio }) {
  return (
    <>
      <h3>Choose one</h3>
      {openFood.choices.map((choice) => (
        <div key={uniqueKey++}>
          <RadioInput
            type="radio"
            id={choice}
            name="choice"
            value={choice}
            checked={choiceRadio.value === choice}
            onChange={choiceRadio.onChange}
          />
          <Label htmlFor={choice}> {choice} </Label>{" "}
        </div>
      ))}
    </>
  );
}
