import Banner from "../components/Banner";
import ItemsList from "../components/ItemsList";
import { fetchData } from "../../public/utils/fetchData";
import styles from "../../public/scss/pages/AproposPage.module.scss";

const dropDowns = await fetchData("../../public/data/dropDowns.json");

function AproposPage() {
  return (
    <div>
      <Banner img="../../public/images/Apropos.png" />
      <ItemsList list={dropDowns} typeOfElement="dropDown" />
    </div>
  );
}

export default AproposPage;
