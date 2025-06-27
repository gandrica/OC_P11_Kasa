import Logo from "./Logo";
import styles from "../../public/scss/components/Footer.module.scss";
function Footer() {
  return (
    <div className={styles.footer}>
      <Logo type="footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
