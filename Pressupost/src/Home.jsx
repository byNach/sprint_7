import React from "react";
import { Link } from "react-router-dom";
import { HomeBackground ,CalculadoraButton } from "./assets/styles/styled-home";

const Home = () => {
  return (
    <HomeBackground>
      <h1>Calculadora de presupost</h1>
      <p>
        La següent calculadora t'ajudarà a calcular l'import del teu projecte
        part per part.
      </p>
      <CalculadoraButton>
        <Link className="Link" to="/Budget">
          Calculadora
        </Link>
      </CalculadoraButton>
    </HomeBackground>
  );
};

export default Home;
