import React from "react";
import styled from "styled-components";
import { foods } from "../Data/FoodData";
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";
import { HorizontalLine } from "../Other/HorizontalLine";
import { formatPrice } from "../Data/FoodData";

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 20px 500px 20px;

  @media (max-width: 400px) {
    width: 100%;
    margin: 0px;
  }
`;
// margin: 10px 5px 15px 20px;
//   top margin is 10px
//   right margin is 5px
//   bottom margin is 15px
//   left margin is 20px

export function Menu({ setOpenFood }) {
  let uniqueKey = 0;
  return (
    <MenuStyled>
      <h1>Menu</h1>
      <HorizontalLine />
      {Object.entries(foods).map(([sectionName, foods]) => (
        <div key={sectionName}>
          <h2>{sectionName}</h2>
          <FoodGrid>
            {foods.map((food) => (
              <Food
                key={uniqueKey++}
                img={food.img}
                onClick={() => {
                  setOpenFood(food);
                }}>
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price)}</div>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </div>
      ))}
    </MenuStyled>
  );
}
