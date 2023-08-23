import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <header className={styles.nav}>
      <div className={styles.logo}>
        <img
          className={styles.threadsLogoIcon}
          alt=""
          src="/threads-logo.svg"
        />
        <h2 className={styles.threads}>threads</h2>
      </div>
      <div className={styles.avatar}>
        <div className={styles.righInfos}>
          <img className={styles.logo2Icon} alt="" src="/logo-2.svg" />
          <img
            className={styles.hamburgerIcon}
            alt=""
            src="/threadsImages/hamburger.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
