import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="container my-5 d-flex flex-column align-items-center gap-5">
      <img
        className="img-fluid rounded image"
        src="./welcome.webp"
        alt="welcome"
      />
      <p>
        You can find all the newly released books on the{" "}
        <strong>
          <Link to="/books">Books</Link>
        </strong>{" "}
        Page.
      </p>
    </div>
  );
};

export default Home;
