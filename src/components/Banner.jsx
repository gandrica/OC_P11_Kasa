import styles from "../../public/scss/components/Banner.module.scss";
import { splitWordsFunction } from "../../public/utils/splitWordsFunction.jsx";
function Banner({ img, msg = "", filter = 1 }) {
  return (
    <div className={styles.banner}>
      <img
        src={img}
        alt="Page banner"
        style={{ filter: `brightness(${filter})` }}
      />
      {splitWordsFunction(msg, "", ", ")}
    </div>
  );
}

export default Banner;
