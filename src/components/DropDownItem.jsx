import { useState } from "react";
import styles from "../../public/scss/components/DropDownItem.module.scss";
function DropDownItem({ item }) {
  const { title, texte } = item;
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`${styles.dropDownItem} ${
        visible ? styles.increaseHeight : ""
      }`}
    >
      <h4
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {title}
        <span>
          <svg
            className={visible ? styles.left : undefined}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </span>
      </h4>
      <div className={visible ? styles.visible : styles.invisible}>
        {visible ? (
          Array.isArray(texte) ? (
            <ul>
              {texte.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{texte}</p>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default DropDownItem;
