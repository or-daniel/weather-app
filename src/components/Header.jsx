import React from "react";
import "./Header.css";

function Header({ weatherData }) {
  let time = new Date();
  time = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <header>
      {weatherData.main && (
        <div>
          <h1>
            <strong className="headline">10 Days Weather</strong>
            <span className="location">- {weatherData.name}</span>
            <div className="time"> As of {time}</div>
          </h1>
        </div>
      )}
    </header>
  );
}

export default Header;
