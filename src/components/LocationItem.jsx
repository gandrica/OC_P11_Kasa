import { useNavigate } from "react-router-dom";
import styles from "../../public/scss/components/LocationItem.module.scss";
function LocationItem({ item }) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.container}
      onClick={() => {
        navigate(`/location/${item.id}`);
      }}
    >
      <img src={item.cover} />
      <p>{item.title}</p>
    </div>
  );
}

export default LocationItem;
