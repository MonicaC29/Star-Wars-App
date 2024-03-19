//Import necessary modules and components
import Header from "../components/Header";
import FilmList from "../components/FilmList";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import styles from "../styles/styles.module.css";

//Index component for the main page
const Index = ({ films }) => (
  //Use the Layout component as the main layout structure
  <Layout>
    {/*Include the header component for the navigation header*/}
    <Header />
    {/*Main content for the index page*/}
    <div className={styles.container}>
      <h1>Films</h1>
      {/*Render the filmList component and pass the films data*/}
      <FilmList films={films} />
    </div>
  </Layout>
);

//Fetch data asynchronously before rendering the page
Index.getInitialProps = async function () {
  //Make a request to the Star Wars API to get a list of films
  const res = await fetch("https://swapi.dev/api/films/");
  if (!res.ok) {
    throw new Error(`Failed to fetch films: ${res.status}`);
  }
  //Parse the response as JSON
  const data = await res.json();
  //Return the film as props to be used by the component
  return {
    films: data.results,
  };
};

//Export the Index component as the default export
export default Index;
