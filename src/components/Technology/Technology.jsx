import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Technology() {
  //declare your state variable.
  const [cart, setCart] = useState({});

  const handleSubmit = () => {};
  return (
    <div className="buttons">
      <h1>Technology</h1>

      <button onClick={() => setCart({ cart })}>
        <img src="PS5.jpg" alt="PlayStation5" />
        <h3>$499</h3>
      </button>
      <button onClick={() => setCart({ cart })}>
        <img src="Titan-X.jpg" alt="TitanX" />
        <h3>$700</h3>
      </button>
      <button onClick={() => setCart({ cart })}>
        <img src="Iphone-Xs.jpg" alt="Iphone-Xs" />
        <h3>$200</h3>
      </button>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
