// components/FilmList.js
import React from "react";
import Link from "next/link";
import styles from "../styles/styles.module.css";

const FilmList = ({ films }) => {
  if (!films) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul className={styles.list}>
        {films.map((film) => (
          <li key={film.episode_id} className={styles.listItem}>
            <Link href={`/details?id=${film.episode_id}`}>
              <div className={styles.link}>{film.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmList;
