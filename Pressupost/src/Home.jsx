import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Calculadora de presupost</h1>
      <p>
        La següent calculadora t'ajudarà a calcular l'import del teu projecte
        part per part.
      </p>
      <button>
        <Link className="Link" to="/Budget">
          Calculadora
        </Link>
      </button>
    </div>
  );
};

export default Home;
