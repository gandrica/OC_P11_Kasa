import styles from "../../public/scss/components/TagItem.module.scss";
function AdvantageItem({ item }) {
  return <p className={styles.tag}>{item}</p>;
}

export default AdvantageItem;
