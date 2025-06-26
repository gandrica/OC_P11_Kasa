import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import styles from "../../public/scss/layout/PageLayout.module.scss";

function PageLayout() {
  return (
    <main className={styles.main}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default PageLayout;
