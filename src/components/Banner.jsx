import styles from "../../public/scss/components/Banner.module.scss";
function Banner({ img, msg = "" }) {
  return (
    <div className={styles.banner}>
      <img src={img} alt="Page banner" />
      <p>{msg}</p>
    </div>
  );
}

export default Banner;
