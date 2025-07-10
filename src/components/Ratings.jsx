import Star from "./Star";
import styles from "../../public/scss/components/Ratings.module.scss";

function Ratings({ rating }) {
  const ratingsArr = Array.from({ length: 5 }, (_, i) => {
    if (i + 1 <= +rating) {
      return "rated";
    } else {
      return "nonRated";
    }
  });

  return (
    <ul className={styles.ratings}>
      {ratingsArr.map((style) => (
        <li key={Math.random() * 100}>
          <Star style={style} />
        </li>
      ))}
    </ul>
  );
}

export default Ratings;
