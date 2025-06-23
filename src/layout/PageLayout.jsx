import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import styles from "./PageLayout.module.scss";

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
