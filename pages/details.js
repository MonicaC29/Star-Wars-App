// components/FilmDetails.js
import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import styles from "../styles/styles.module.css";

// FilmDetails component for displaying details of a selected film
const FilmDetails = ({ film }) => (
  <div className={styles.container1}>
    <div className={styles.FilmDetails}>
      {/* Display the film title */}
      <h1>{film.title}</h1>
      {/* Display additional details about the film, such as director, producer, and release date */}
      <p>Director: {film.director}</p>
      <p>Producer: {film.producer}</p>
      <p>Release Date: {film.release_date}</p>
    </div>{" "}
    {/* Use the Link component directly */}
    <Link href="/">
      <div className={styles.backButton}> Back</div>
    </Link>
  </div>
);

// Fetch data asynchronously before rendering the page
FilmDetails.getInitialProps = async function ({ query }) {
  try {
    // Make a request to the Start Wars Api to get details of a specific film using the film ID from the query parameters
    const res = await fetch(`http://swapi.dev/api/films/${query.id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch film: ${res.status}`);
    }

    // Parse the response as JSON
    const film = await res.json();
    // Return the film details as props to be used by the component
    return { film };
  } catch (error) {
    console.error("Error fetching film:", error);
    return { film: {} };
  }
};

// Export the FilmDetails component as default export
export default FilmDetails;
