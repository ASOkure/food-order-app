import logoImg from "../assets/logo.jpg";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt=" A restuarant" />
        <h1>Food Order App</h1>
        <nav>
          <button>Cart (0)</button>
        </nav>
      </div>
    </header>
  );
}
