import styles from "../../public/scss/components/Header.module.scss";
import Logo from "./Logo";
import Navigation from "./Navigation";
function Header() {
  return (
    <header className={styles.header}>
      <Logo type="header" />
      <Navigation />
    </header>
  );
}

export default Header;
