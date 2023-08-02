import React from "react";
import styled from "styled-components";
import { DialogContent,  
    DialogFooter, 
    ConfirmButton} from "../FoodDialog/FoodDialog"

export const Dialog = styled.div`
  width: 500px;
  background-color: #e4dcdc;
  position: fixed;
  top: 75px;
  z-index: 12;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    width: 100%;
    left: 0px;
    z-index: 14;
  }
`;

export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 11;
`;

export function OrderDialog({openOrderDialog, setOpenOrderDialog, setOrders}) {
    return openOrderDialog ? <>
        <DialogShadow/>
        <Dialog>
            <DialogContent>
                <h2>Your order has been placed! </h2>
                <p>Thank you for choosing Mars Pizza Co. I hope you enjoy your meal!</p>
            </DialogContent>
            <DialogFooter>
                <ConfirmButton onClick={() => {
                    setOrders([])
                    setOpenOrderDialog();
                }}>
                    I'm Still Hungry!
                </ConfirmButton>
            </DialogFooter>
        </Dialog>
    </> : <div />
}