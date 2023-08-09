import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="homeDiv">
      <h1 className="welcome">Welcome To The LunchBox</h1>
      <div className="Home">
        <img
          src="https://thumbs.gfycat.com/WeeImpeccableElephantseal.webp"
          alt="Bento box of lunch"
        />
      </div>
      <div className="about">
        <p>
          Where all snacks are munchie material. Don't see your favorite snack?
          Add it to the lunchbox and let's get snackin'.
        </p>
      </div>
    </div>
  );
}

export default Home;
