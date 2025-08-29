import { NavLink } from "react-router-dom";
import styles from "../../public/scss/components/Navigation.module.scss";
function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to="/accueil"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/apropos"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
