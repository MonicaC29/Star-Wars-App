import React from "react";
import styles from "../styles/styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.title}>~~~ Star Wars ~~~</div>
        <Image src="/starWars.png" alt="Star Wars Logo" className={styles.logo} />
      </div>
    </header>
  );
};

export default Header;
