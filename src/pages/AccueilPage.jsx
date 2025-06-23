import styles from "./AccueilPage.module.scss";

import Banner from "../components/Banner";
import ItemsList from "../components/ItemsList";
import { useFetchData } from "../customHooks/useFetchData";
function AccueilPage() {
  const locations = useFetchData("../../data/locations.json");
  return (
    <main>
      <Banner />
      <ItemsList list={locations} typeOfElement="location" />
    </main>
  );
}

export default AccueilPage;
