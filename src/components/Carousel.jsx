import { useState } from "react";
import styles from "./Carousel.module.scss";
function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);
  const image = pictures[index];

  function nextIndex() {
    if (index === pictures.length - 1) {
      return;
    }
    setIndex((i) => i + 1);
  }

  function prevIndex() {
    if (index === 0) {
      return;
    }
    setIndex((i) => i - 1);
  }

  return (
    <div>
      <span onClick={prevIndex} className={index === 0 ? styles.disabled : ""}>
        <i className="fa-solid fa-angle-left"></i>
      </span>
      <img src={image} width="300" height="200" />
      <span>{`${index + 1}/${pictures.length}`}</span>
      <span
        onClick={nextIndex}
        className={index === pictures.length - 1 ? styles.disabled : ""}
      >
        <i className="fa-solid fa-angle-right"></i>
      </span>
    </div>
  );
}

export default Carousel;
