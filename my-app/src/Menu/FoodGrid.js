import styled from "styled-components";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const FoodLabel = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
`;

export const Food = styled.div`
  height: 200px;
  background-image: ${({ img }) => `url(${img});`};
  background-position: center;
  background-size: 80%;
  filter: contrast(75%);
  font-size: 20px;
  padding: 10px;
  margin-top: 5px;
  border-radius: 7px;
  transition-property: box-shadow margin-top filter;
  transition-duration: 0.1s;
  box-shadow: 0px 0px 2px 0px grey;
  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    margin-top: 0px;
    margin-bottom: 5px;
    box-shadow: 0px 5px 10px 0px grey;
  }
`;
