import Star from "./Star";
import styles from "./Ratings.module.scss";

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
    <div className={styles.rating}>
      {ratingsArr.map((style) => (
        <Star style={style} />
      ))}
    </div>
  );
}

export default Ratings;
