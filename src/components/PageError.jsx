import { Link } from "react-router-dom";
function PageError() {
  return (
    <div>
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default PageError;
