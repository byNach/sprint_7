import { useState } from "react";
import "./App.css";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);

  const sumWebPrice = (event) => {
    if (event.target.checked) {
      setTotalPrice(totalPrice + Number(event.target.value))
    }
    else{
      setTotalPrice(totalPrice - Number(event.target.value))
    }
  };
  
  return (
    <div>
      <p>¿Qué quieres hacer?</p>
      <div>
        <input
          type="checkbox"
          id="webCheckbox"
          onChange={sumWebPrice}
          value={500}
        ></input>
        Una pàgina web (500 €)
      </div>
      <div>
        <input
          type="checkbox"
          id="seoCheckbox"
          onChange={sumWebPrice}
          value={300}
        ></input>
        Una consultoria SEO (300 €)
      </div>
      <div>
        <input
          type="checkbox"
          id="adsCheckbox"
          onChange={sumWebPrice}
          value={200}
        ></input>
        Una campanya de Google Ads (200 €)
      </div>
      <div>Preu: {totalPrice} €</div>
    </div>
  );
}

export default App;
