import styles from "../../public/scss/components/LocationHeader.module.scss";
function LocationHeader({ title, location }) {
  return (
    <header>
      <h2>{title}</h2>
      <p>{location}</p>
    </header>
  );
}

export default LocationHeader;
