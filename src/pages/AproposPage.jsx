import Banner from "../components/Banner";
import ItemsList from "../components/ItemsList";
import { useFetchData } from "../customHooks/useFetchData";
import styles from "./AproposPage.module.scss";
function AproposPage() {
  const dropDowns = useFetchData("../../data/dropDowns.json");
  console.log(dropDowns);
  return (
    <main>
      <Banner />
      <ItemsList list={dropDowns} typeOfElement="dropDown" />
    </main>
  );
}

export default AproposPage;
