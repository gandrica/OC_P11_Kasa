import ErrorComponent from "../components/ErrorComponent";
import styles from "../../public/scss/pages/PageIntrouvable.module.scss";
function PageIntrouvable() {
  return (
    <div className={styles.errorPage}>
      <ErrorComponent />
    </div>
  );
}

export default PageIntrouvable;
