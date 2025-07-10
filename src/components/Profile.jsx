import styles from "../../public/scss/components/Profile.module.scss";
function Profile({ host }) {
  const { name, picture } = host;
  const [firstName, lastName] = name.split(" ");
  return (
    <div className={styles.profile}>
      <p>
        {firstName}
        <br />
        {lastName}
      </p>
      <img src={picture} />
    </div>
  );
}

export default Profile;
