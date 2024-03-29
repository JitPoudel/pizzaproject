import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
import { websiteSecondary } from "../Styles/colors";
import { formatPrice } from "../Data/FoodData";
import { QuantityInput } from "./QuantityInput";
import { useQuantity } from "../Hooks/useQuantity";
import { Toppings } from "./Toppings";
import { useToppings } from "../Hooks/useToppings";
import { useChoice } from "../Hooks/useChoice";
import { Choices } from "./Choices";

export const Dialog = styled.div`
  width: 500px;
  background-color: #e4dcdc;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    width: 100%;
    left: 0px;
    z-index: 12;
  }
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 250px;
  padding: 0px 40px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;
export const ConfirmButton = styled.div`
  margin: 10px;
  color: #e4dcdc;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${websiteSecondary};
`;

export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  font-size: 30px;
  padding: 5px 40px;
`;

const pricePerTopping = 0.5;
export function getPrice(order) {
  return (
    order.quantity *
    (order.price +
      order.toppings.filter((t) => t.checked).length * pricePerTopping)
  );
}

function hasToppings(food) {
  return food.section === "Pizza";
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings);
  const choiceRadio = useChoice(openFood.choice);
  const isEditing = openFood.index > -1;

  function close() {
    setOpenFood();
  }

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    choice: choiceRadio.value,
  };

  function editOrder() {
    const newOrders = [...orders];
    newOrders[openFood.index] = order;
    setOrders(newOrders);
    close();
  }

  function addToOrder() {
    setOrders([...orders, order]);
    //this closes the dialog
    close();
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity} />
          {hasToppings(openFood) && (
            <>
              <h3>Please choose the toppings:</h3>
              <Toppings {...toppings} />
            </>
          )}
          {openFood.choices && (
            <Choices openFood={openFood} choiceRadio={choiceRadio} />
          )}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={isEditing ? editOrder : addToOrder}
            disabled={openFood.choices && !choiceRadio.value}>
            {isEditing ? `Update order: ` : `Add to order: `}
            {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function FoodDialog(props)
{
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
}
