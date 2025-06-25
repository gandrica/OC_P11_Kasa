import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.scss";

function Logo() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")}>
      <img src="../../public/images/Logo.svg" alt="Logo Kasa" />
    </div>
  );
}

export default Logo;
