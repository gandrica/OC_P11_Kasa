import styles from "../../public/scss/components/ErrorComponent.module.scss";
import { Link } from "react-router-dom";
function ErrorComponent() {
  return (
    <div className={styles.error}>
      <h2>404</h2>
      <p>
        <span>Oups! La page que </span>
        <span>vous demandez n'existe pas.</span>
      </p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default ErrorComponent;
