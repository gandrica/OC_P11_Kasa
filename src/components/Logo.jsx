import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.scss";

function Logo() {
  const navigate = useNavigate();
  return <div onClick={() => navigate("/")}>Logo</div>;
}

export default Logo;
