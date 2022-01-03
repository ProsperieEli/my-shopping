import React from "react";
import { Link } from "react-router-dom";
import Technology from "../Technology/Technology";

export default function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <h3>What are you searching for today?</h3>
      <Link to="/tech">
        <button>Technology</button>
      </Link>
      <button>Food</button>
      <button>Clothes</button>
    </div>
  );
}
