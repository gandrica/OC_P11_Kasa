import { useState } from "react";
import styles from "../../public/scss/components/DropDownItem.module.scss";
function DropDownItem({ item }) {
  const { title, texte } = item;
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.dropDownItem}>
      <h4
        onClick={() => {
          console.log(visible);
          setVisible(!visible);
        }}
      >
        {title}
        {visible ? (
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </span>
        ) : (
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
            </svg>
          </span>
        )}
      </h4>
      <p>
        <span className={visible ? "visible" : "invisible"}>{texte}</span>
      </p>
    </div>
  );
}

export default DropDownItem;
