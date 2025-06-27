import styles from "../../public/scss/components/Banner.module.scss";
function Banner({ img, msg = "", filter = 1 }) {
  return (
    <div className={styles.banner}>
      <img
        src={img}
        alt="Page banner"
        style={{ filter: `brightness(${filter})` }}
      />
      <p>{msg}</p>
    </div>
  );
}

export default Banner;
