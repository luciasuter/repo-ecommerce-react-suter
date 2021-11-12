import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="NavBar">
      <h1 className="titulo"><a href="/">
        Artistica Kunstler</a>
      </h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Novedades</a>
        </li>
        <li>
          <a href="/">Catalogo</a>
        </li>
        <li>
          <a href="/">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
