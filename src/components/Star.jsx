import styles from "../../public/scss/components/Star.module.scss";
function Star({ style }) {
  return (
    <span className={styles[style]}>
      <i className="fa-solid fa-star"></i>
    </span>
  );
}

export default Star;
