//when making a custom hook should call it use...something
import { useState } from "react";

export function useOrders() {
  const [orders, setOrders] = useState([]);
  return {
    orders,
    setOrders,
  };
}
