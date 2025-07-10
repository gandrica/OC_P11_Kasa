import { useState } from "react";
import styles from "../../public/scss/components/Caroussel.module.scss";
function Caroussel({ pictures }) {
  const [index, setIndex] = useState(0);
  const image = pictures[index];

  function nextIndex() {
    if (index === pictures.length - 1) {
      setIndex(0);
      return;
    }
    setIndex((i) => i + 1);
  }

  function prevIndex() {
    if (index === 0) {
      setIndex(pictures.length - 1);
      return;
    }
    setIndex((i) => i - 1);
  }

  return (
    <div className={styles.caroussel}>
      <img src={image} alt="Photo location" />
      {pictures.length > 1 && (
        <div>
          <span onClick={prevIndex} className={styles.leftArrow}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </span>
          <span className={styles.numPages}>{`${index + 1}/${
            pictures.length
          }`}</span>
          <span onClick={nextIndex} className={styles.rightArrow}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
}

export default Caroussel;
