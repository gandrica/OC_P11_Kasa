import styles from "./Header.module.scss";
import Logo from "./Logo";
import Navigation from "./Navigation";
function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
