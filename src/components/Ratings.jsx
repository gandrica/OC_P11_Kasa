import Star from "./Star";
import styles from "../../public/scss/components/Ratings.module.scss";

function Ratings({ rating }) {
  const ratingsArr = Array.from({ length: 5 }, (_, i) => {
    console.log(rating);
    if (i + 1 <= +rating) {
      return "rated";
    } else {
      return "nonRated";
    }
  });
  console.log(ratingsArr);

  return (
    <ul className={styles.rating}>
      {ratingsArr.map((style) => (
        <li key={Math.random() * 100}>
          <Star style={style} />
        </li>
      ))}
    </ul>
  );
}

export default Ratings;
