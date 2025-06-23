import styles from "./ItemsList.module.scss";
import LocationItem from "./LocationItem";
import DropDownItem from "./DropDownItem";
import TagItem from "./TagItem";
function ItemsList({ list, typeOfElement }) {
  return (
    <ul>
      {typeOfElement === "location" &&
        list.map((item) => (
          <li>
            <LocationItem item={item} key={item.id} />
          </li>
        ))}
      {typeOfElement === "dropDown" &&
        list.map((item) => (
          <li>
            <DropDownItem item={item} key={item.id} />
          </li>
        ))}
      {typeOfElement === "tag" &&
        list.map((item) => (
          <li>
            <TagItem item={item} key={item.id} />
          </li>
        ))}
    </ul>
  );
}

export default ItemsList;
