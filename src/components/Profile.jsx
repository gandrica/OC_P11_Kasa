import styles from "./Profile.module.scss";
function Profile({ host }) {
  const { name, picture } = host;
  return (
    <div className={styles.profile}>
      <p>{name}</p>
      <img src={picture} />
    </div>
  );
}

export default Profile;
