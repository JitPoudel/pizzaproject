import { React, useState } from "react";
import { NavBar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { Order } from "./Order/Order";
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";
import { useFirebaseLogin } from "./Hooks/useFirebaseLogin";
import { Login } from "./Login/Login";
import { OrderDialog } from "./Order/OrderDialog";
import { useOrderDialog } from "./Hooks/userOrderDialog";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const login = useFirebaseLogin();
  const orderDialog = useOrderDialog();

  const [toggleOrderModal, setToggleOrderModal] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  useTitle({ ...openFood, ...orders });

  return (
    <>
      <GlobalStyle />
      <OrderDialog {...orderDialog} {...orders} />
      <FoodDialog {...openFood} {...orders} />
      {toggleOrderModal && (
        <Order
          {...orders}
          {...login}
          setToggleOrderModal={setToggleOrderModal}
          setOpenLogin={setOpenLogin}
          {...openFood}
          {...orderDialog}
        />
      )}
      {openLogin && <Login {...login} setOpenLogin={setOpenLogin} />}
      <NavBar
        {...login}
        setToggleOrderModal={setToggleOrderModal}
        toggleOrderModal={toggleOrderModal}
        setOpenLogin={setOpenLogin}
        openLogin={openLogin}
      />
      <Banner></Banner>
      <Menu {...openFood} />
    </>
  );
}

export default App;
