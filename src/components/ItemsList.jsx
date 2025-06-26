import styles from "../../public/scss/components/ItemsList.module.scss";
import LocationItem from "./LocationItem";
import DropDownItem from "./DropDownItem";
import TagItem from "./TagItem";
function ItemsList({ list, typeOfElement }) {
  console.log(list);
  return (
    <ul className={styles.itemsListLocation}>
      {typeOfElement === "location" &&
        list.map((item) => (
          <li key={`${item?.id}/${Math.random() * 1000}`}>
            <LocationItem item={item} />
          </li>
        ))}
      {typeOfElement === "dropDown" &&
        list.map((item) => (
          <li key={`${item?.title}/${Math.random() * 1000}`}>
            <DropDownItem item={item} />
          </li>
        ))}
      {typeOfElement === "tag" &&
        list.map((item) => (
          <li key={`${item?.title}/${Math.random() * 1000}`}>
            <TagItem item={item} />
          </li>
        ))}
    </ul>
  );
}

export default ItemsList;
