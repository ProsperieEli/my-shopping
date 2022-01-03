import React from "react";
import { Link } from "react-router-dom";

export default function Technology() {
  const handleSubmit = () => {};
  return (
    <div>
      <h1>Technology</h1>
      <button>
        <img src="PS5.jpg" alt="PlayStation5" />
        <h3>$499</h3>
      </button>
      <button>
        <img src="Titan-X.jpg" alt="TitanX" />
        <h3>$700</h3>
      </button>
      <button>
        <img src="Iphone-Xs.jpg" alt="Iphone-Xs" />
        <h3>$200</h3>
      </button>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
