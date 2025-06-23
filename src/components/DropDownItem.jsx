import styles from "./DropDownItem.module.scss";
function DropDownItem({ item }) {
  const { title, texte } = item;
  return (
    <div>
      <h4>{title}</h4>
      <p>{texte}</p>
    </div>
  );
}

export default DropDownItem;
