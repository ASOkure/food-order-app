import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt=" A restuarant" />
        <h1>Food Order App</h1>
        <nav>
          <Button textOnly>Cart ({totalCartItems})</Button>
        </nav>
      </div>
    </header>
  );
}
