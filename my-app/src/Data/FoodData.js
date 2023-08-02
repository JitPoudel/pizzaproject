export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export const foodItems = [
  {
    name: "Classic Pizza",
    img: "/img/classic-pizza.jpg",
    section: "Pizza",
    price: 10.99,
  },
  {
    name: "Egg Pizza",
    img: "/img/egg-pizza.jpg",
    section: "Pizza",
    price: 13.99,
  },
  {
    name: "Olive Pizza",
    img: "/img/olive-pizza.jpg",
    section: "Pizza",
    price: 11.99,
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pepperoni-pizza.jpg",
    section: "Pizza",
    price: 12.99,
  },
  {
    name: "Ham Sandwich",
    img: "/img/sandwich.jpg",
    section: "Sandwich",
    choices: [
      "Mozzarella",
      "Provolone",
      "American",
      "Cheddar",
      "Munster",
      "All",
    ],
    price: 8.99,
  },
  {
    name: "Burger",
    img: "/img/burger.jpg",
    section: "Sandwich",
    choices: ["Ground Beef Patty", "Vegan Patty", "Chicken Patty", "No Patty"],
    price: 10.99,
  },
  {
    name: "Fries",
    img: "/img/fries.jpg",
    section: "Sides",
    choices: ["Ketchup", "Cheese", "Mild", "Honey Mustard", "Hot"],
    price: 2.99,
  },
  {
    name: "Chicken Wings",
    img: "/img/chicken.jpg",
    section: "Sides",
    choices: ["Sweet BBQ", "Buffalo", "Mild", "Spicy Garlic", "Hot", "Wild"],
    price: 5.99,
  },
  {
    name: "Soda",
    price: 1.99,
    img: "/img/soda.jpg",
    section: "Drinks",
    choices: [
      "Coke",
      "Coca-Cola Zero Sugar",
      "Diet Coke",
      "Sprite",
      "Dasani® Bottle Water",
      "Fanta® Orange",
    ],
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
