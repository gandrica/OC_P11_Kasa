import styles from "./AccueilPage.module.scss";

import Banner from "../components/Banner";
import ItemsList from "../components/ItemsList";
import { fetchData } from "../utils/fetchData";

const locations = await fetchData("../../data/locations.json");

console.log(locations);
function AccueilPage() {
  return (
    <main>
      <Banner
        img="../../public/images/Accueil.png"
        msg="Chez vous, partout et ailleurs"
      />
      <ItemsList list={locations} typeOfElement="location" />
    </main>
  );
}

export default AccueilPage;
