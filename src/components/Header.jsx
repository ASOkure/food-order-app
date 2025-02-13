import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt=" A restuarant" />
        <h1>Food Order App</h1>
        <nav>
          <Button textOnly>Cart (0)</Button>
        </nav>
      </div>
    </header>
  );
}
