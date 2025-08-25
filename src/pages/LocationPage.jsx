import { useParams } from "react-router-dom";
import { fetchData } from "../../public/utils/fetchData";
import Caroussel from "../components/Caroussel";
import LocationHeader from "../components/LocationHeader";
import Profile from "../components/Profile";
import ItemsList from "../components/ItemsList";
import Ratings from "../components/Ratings";
import PageIntrouvable from "./PageIntrouvable";
import styles from "../../public/scss/pages/LocationPage.module.scss";

const locations = await fetchData("../../public/data/locations.json");

function LocationPage() {
  const { id } = useParams();
  const locationItem = locations.find((location) => location.id === id);
  if (!locationItem) return <PageIntrouvable />;
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

  function texteTransformation(text) {
    const textSplitted = text.split("-");
    const textSplitted1 = textSplitted[0].split(" ").join("-").slice(0, -1);
    const textSplitted2 = textSplitted[1].includes("Paris")
      ? "Paris"
      : textSplitted[1];
    const textRearranged = [textSplitted2, ", ", textSplitted1].join("");
    return textRearranged;
  }
  const locationTexte = texteTransformation(location);

  return (
    <div className={styles.pageLocation}>
      <Caroussel pictures={pictures} />

      <LocationHeader title={title} location={locationTexte} />
      <ItemsList list={tags} typeOfElement="tag" />

      <Profile host={host} />
      <Ratings rating={rating} />

      <ItemsList list={listDropDownItems} typeOfElement="locationDropDown" />
    </div>
  );
}

export default LocationPage;
