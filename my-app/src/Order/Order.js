import React from "react";
import styled from "styled-components";
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from "../FoodDialog/FoodDialog";
import { formatPrice } from "../Data/FoodData";
import { getPrice } from "../FoodDialog/FoodDialog";
import { ref, push, set } from "firebase/database";
import { database } from "../firebase";

const refTest = ref(database, "testobj");
const newPostref = push(refTest);
set(newPostref, {
  hello: "world",
});

const OrderStyled = styled.div`
  width: 450px;
  background-color: #e4dcdc;
  position: fixed;
  right: 0px;
  top: 52px;
  z-index: 10;
  height: calc(100% - 52px);
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    position: relative;
    width: 100%;
  }
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

//Basically taking the dialog content and its properties and extending it
const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
    editable
      ? `
  &:hover{
    cursor: pointer;
    background-color: #e7e7e7;
  }
  `
      : `
  pointer-events: none;
  `}
`;

//Row of item
const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;
const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;

export function Order({
  orders,
  setOrders,
  setToggleOrderModal,
  setOpenFood,
  email,
  loggedIn,
  setOpenOrderDialog,
  setOpenLogin,
  openLogin,
  setError,
}) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order); //This subtotal function will start from 0 and add next total to calculate the total.
  }, 0);

  const salestax = subtotal * 0.08; //Restaurant Tax is 0.08% in ohio
  const total = subtotal + salestax;

  function close() {
    setToggleOrderModal(false);
  }
  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  let uniqueKey = 0;
  if (loggedIn) email = loggedIn.email;
  function sendOrder() {
    var postNewOrderRef = ref(database, "order");
    const newOrderRef = push(postNewOrderRef);
    const newOrders = orders.map((order) => {
      return Object.keys(order).reduce((acc, orderKey) => {
        if (!order[orderKey]) {
          return acc;
        }
        if (orderKey === "toppings") {
          return {
            ...acc,
            [orderKey]: order[orderKey]
              .filter(({ checked }) => checked.checked)
              .map(({ name }) => name),
          };
        }
        return {
          ...acc,
          [orderKey]: order[orderKey],
        };
      }, {});
    });
    set(newOrderRef, {
      order: newOrders,
      email,
    });
  }

  const toggleLogin = (setOpenLogin, openLogin) => {
    setOpenLogin(!openLogin);
  };

  return (
    <>
      <DialogShadow onClick={close} />
      <OrderStyled>
        {orders.length === 0 ? (
          <OrderContent>
            You have nothing in your cart! Add something and check back!
          </OrderContent>
        ) : (
          <OrderContent>
            <OrderContainer>Your Order:</OrderContainer>{" "}
            {orders.map((order, index) => (
              <OrderContainer key={uniqueKey++} editable>
                <OrderItem
                  onClick={() => {
                    setOpenFood({ ...order, index });
                  }}>
                  <div>{order.quantity}</div>
                  <div>{order.name}</div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteItem(index);
                    }}>
                    🗑️
                  </div>
                  <div>{formatPrice(getPrice(order))}</div>
                </OrderItem>
                <DetailItem>
                  {order.toppings
                    .filter((t) => t.checked)
                    .map((topping) => topping.name)
                    .join(", ")}
                </DetailItem>
                {order.choice && <DetailItem>{order.choice}</DetailItem>}
              </OrderContainer>
            ))}
            <OrderContainer>
              <OrderItem>
                <div>Subtotal:</div>
                <div>{formatPrice(subtotal)}</div>
              </OrderItem>

              <OrderItem>
                <div>Tax: </div>
                <div>{formatPrice(salestax)}</div>
              </OrderItem>

              <OrderItem>
                <div>Total: </div>
                <div>{formatPrice(total)}</div>
              </OrderItem>
            </OrderContainer>
          </OrderContent>
        )}
        {orders.length > 0 && (
          <DialogFooter>
            <ConfirmButton
              onClick={() => {
                if (loggedIn) {
                  setOpenOrderDialog(true);
                  sendOrder(orders, loggedIn);
                } else {
                  close();
                  toggleLogin(setOpenLogin, openLogin);
                  setError("You must sign in to place order.");
                }
              }}>
              Checkout
            </ConfirmButton>
          </DialogFooter>
        )}
      </OrderStyled>
    </>
  );
}
