import styles from "../../public/scss/pages/AccueilPage.module.scss";

import Banner from "../components/Banner";
import ItemsList from "../components/ItemsList";
import { fetchData } from "../../public/utils/fetchData";

const locations = await fetchData("../../public/data/locations.json");

function AccueilPage() {
  return (
    <div className={styles.pageAccueil}>
      <Banner
        img="../../public/images/Accueil.png"
        msg="Chez vous, partout et ailleurs"
        filter="0.4"
      />
      <ItemsList list={locations} typeOfElement="location" />
    </div>
  );
}

export default AccueilPage;
