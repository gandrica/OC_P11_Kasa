import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import Carousel from "../components/Carousel";
import LocationHeader from "../components/LocationHeader";
import Profile from "../components/Profile";
import ItemsList from "../components/ItemsList";
import Ratings from "../components/Ratings";
import styles from "./LocationPage.module.scss";

const locations = await fetchData("../../data/locations.json");

function LocationPage() {
  const { id } = useParams();
  const locationItem = locations.find((location) => location.id === id);
  const {
    pictures,
    title,
    location,
    host,
    tags,
    rating,
    description,
    equipments,
  } = locationItem;
  const descriptionTag = {
    title: "Description",
    texte: description,
  };
  const equipementsTag = {
    title: "Equipement",
    texte: equipments.join("\n"),
  };
  const listDropDownItems = [descriptionTag, equipementsTag];

  console.log(rating);

  return (
    <main>
      <Carousel pictures={pictures} />
      <LocationHeader title={title} location={location} />
      <Profile host={host} />
      <ItemsList list={tags} typeOfElement="tag" />
      <Ratings rating={rating} />
      <ItemsList list={listDropDownItems} typeOfElement="dropDown" />
    </main>
  );
}

export default LocationPage;
