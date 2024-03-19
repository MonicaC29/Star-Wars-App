import React from "react";
import styles from "../styles/styles.module.css";

//Layout component for structuring the main content of the application
const Layout = ({ children }) => {
  return (
    //Use a container div with styling from the imported module
    <div className={styles.container}>
      {/*The main content of the page is wrapped in the main tag*/}
      <main>{children}</main>
    </div>
  );
};

//Export the layout component as the default export
export default Layout;
