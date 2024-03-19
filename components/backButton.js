import Link from "next/link";
import styles from "../styles/styles.module.css";

const BackButton = () => {
  return (
    <Link href="/">
      <a className={styles.backButton}>Back</a>
    </Link>
  );
};

export default BackButton;
