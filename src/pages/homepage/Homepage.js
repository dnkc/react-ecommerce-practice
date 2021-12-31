import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/Directory";

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

//const HomePagewithRouter = WithRouter(Homepage);
export default Homepage;
