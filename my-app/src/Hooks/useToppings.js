import { useState } from "react";

export function useToppings(defaultTopping) {
  const [toppings, setToppings] = useState(
    defaultTopping || getDefaultToppings()
  );
  function checkTopping(index) {
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings);
  }
  return {
    checkTopping,
    toppings,
  };
}

const toppingsList = [
  "Pepperoni",
  "Mushrooms",
  "Onions",
  "Sausage",
  "Bacon",
  "Green peppers",
  "Grilled chicken",
  "Extra cheese",
  "Black olives",
  "Ham",
  "Pineapple",
  "Spinach",
  "Anchovies",
  "Hard boiled eggs",
];

function getDefaultToppings() {
  return toppingsList.map((topping) => ({
    name: topping,
    checked: false,
  }));
}
