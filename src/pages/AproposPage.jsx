import Banner from "../components/Banner";
import ItemsList from "../components/ItemsList";
import { fetchData } from "../utils/fetchData";
import styles from "./AproposPage.module.scss";

const dropDowns = await fetchData("../../data/dropDowns.json");

function AproposPage() {
  return (
    <main>
      <Banner />
      <ItemsList list={dropDowns} typeOfElement="dropDown" />
    </main>
  );
}

export default AproposPage;
