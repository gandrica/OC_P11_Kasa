import styles from "./ItemsList.module.scss";
import LocationItem from "./LocationItem";
import DropDownItem from "./DropDownItem";
import AdvantageItem from "./LocationItem";
function ItemsList({ list, typeOfElement }) {
  return (
    <ul>
      {typeOfElement === "location" &&
        list.map((item) => (
          <li>
            <LocationItem location={item} />
          </li>
        ))}
      {typeOfElement === "dropDown" &&
        list.map((item) => (
          <li>
            <DropDownItem item={item} />
          </li>
        ))}
      {typeOfElement === "advantage" &&
        list.map((item) => (
          <li>
            <AdvantageItem item={item} />
          </li>
        ))}
    </ul>
  );
}

export default ItemsList;
