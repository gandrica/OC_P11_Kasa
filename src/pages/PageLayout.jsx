import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styles from "./PageLayout.module.scss";
import Footer from "../components/Footer";

function PageLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PageLayout;
