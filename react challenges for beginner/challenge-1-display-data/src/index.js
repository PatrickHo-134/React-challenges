import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chrisoncode",
  twitterLink: "https://twitter.com/chrisoncode",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  const url = `https://twitter.com/${user.twitterUsername}`;

  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">
        <img src={user.avatar} />

        <h3>{user.name}</h3>

        <p>
          <strong>Location</strong>
        </p>
        <p>{user.location}</p>

        <p>
          <strong>Eats</strong>
        </p>
        <p>{user.foodType}</p>

        <p>
          <strong>Age</strong>
        </p>
        <p>{user.age}</p>

        <p>
          <strong>Likes</strong>
        </p>
        <p>{user.likes}</p>

        <p>
          <strong>Twitter</strong>

          <a href={url}>@{user.twitterUsername}</a>
        </p>
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
