import { useState, useEffect } from "react";

import styles from "./AccueilPage.module.scss";

import Banner from "../components/Banner";
import ItemsList from "../components/ItemsList";
function AccueilPage() {
  const [data, setData] = useState([]);
  useEffect(function () {
    async function fetchData() {
      const res = await fetch("../../data/data.json");
      const data = await res.json();
      setData([...data]);
    }
    fetchData();
  }, []);
  console.log(data);
  return (
    <main>
      <Banner />
      <ItemsList list={data} typeOfElement="location" />
    </main>
  );
}

export default AccueilPage;
