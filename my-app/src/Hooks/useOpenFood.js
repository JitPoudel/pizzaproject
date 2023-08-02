//when making a custom hook should call it use...something
import { useState } from "react";

export function useOpenFood() {
  const [openFood, setOpenFood] = useState();
  return {
    openFood,
    setOpenFood,
  };
}
