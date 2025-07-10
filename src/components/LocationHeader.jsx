import styles from "../../public/scss/components/LocationHeader.module.scss";
function LocationHeader({ title, location }) {
  return (
    <header className={styles.locationHeader}>
      <h2>{title}</h2>
      <p>{location}</p>
    </header>
  );
}

export default LocationHeader;
