import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
function Navigation() {
  return (
    <nav>
      <NavLink to="/accueil">Accueil</NavLink>
      <NavLink to="/apropos">A Propos</NavLink>
    </nav>
  );
}

export default Navigation;
