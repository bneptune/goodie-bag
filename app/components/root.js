import React from "react";
import { Link } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <nav>
        <p>Goodie Bag</p>
        <hr />
        <p>
          <Link to={"/"}>Home</Link>
        </p>
        <hr />
        <p>
          <Link to={"/candies"}>Candies</Link>
        </p>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
      </main>
    </div>
  );
};

export default Root;
