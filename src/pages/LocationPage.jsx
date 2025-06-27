import { useParams } from "react-router-dom";
import { fetchData } from "../../public/utils/fetchData";
import Caroussel from "../components/Caroussel";
import LocationHeader from "../components/LocationHeader";
import Profile from "../components/Profile";
import ItemsList from "../components/ItemsList";
import Ratings from "../components/Ratings";
import styles from "../../public/scss/pages/LocationPage.module.scss";

const locations = await fetchData("../../public/data/locations.json");

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
    <div className={styles.pageLocation}>
      <Caroussel pictures={pictures} />
      <LocationHeader title={title} location={location} />
      <Profile host={host} />
      <ItemsList list={tags} typeOfElement="tag" />
      <Ratings rating={rating} />
      <ItemsList list={listDropDownItems} typeOfElement="dropDown" />
    </div>
  );
}

export default LocationPage;
