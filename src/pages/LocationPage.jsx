import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import Carousel from "../components/Carousel";
import Description from "../components/Description";
import Profile from "../components/Profile";
import ItemsList from "../components/ItemsList";
import Ratings from "../components/Ratings";
import styles from "./LocationPage.module.scss";

const locations = await fetchData("../../data/locations.json");

function LocationPage() {
  const { id } = useParams();
  const location = locations.find((location) => location.id === id);
  const description = { title: "Description", texte: location.description };
  const equipement = {
    title: "Equipement",
    texte: location.equipments.join("\n"),
  };

  const listDropDownItems = [description, equipement];
  console.log(listDropDownItems);

  return (
    <main>
      <Carousel />
      <Description />
      <Profile />
      <ItemsList list={location.tags} typeOfElement="tag" />
      <Ratings />
      <ItemsList list={listDropDownItems} typeOfElement="dropDown" />
    </main>
  );
}

export default LocationPage;
