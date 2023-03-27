import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const pricePerPage = 30;
  const [totalPrice, setTotalPrice] = useState(0);
  const [webChecked, setwebChecked] = useState(false);

  function totalWebServices(props) {
    const totalServicesSum = props * pricePerPage;
    console.log(totalServicesSum);
  }

  const sumWebPrice = (event) => {
    event.target.checked
      ? setTotalPrice(totalPrice + Number(event.target.value))
      : setTotalPrice(totalPrice - Number(event.target.value));
  };

  const showWebOption = (event) =>
    event.target.checked ? setwebChecked(true) : setwebChecked(false);
  return (
    <div>
      <p>¿Qué quieres hacer?</p>
      <div>
        <input
          type="checkbox"
          id="webCheckbox"
          onClick={showWebOption}
          onChange={sumWebPrice}
          value={500}
        ></input>
        Una pàgina web (500 €)
        {webChecked ? (
          <>
            <div>
              Numero de pàgines:{" "}
              <input
                type="text"
                placeholder="0"
                onChange={function (e) {
                  console.log(e.target.value);
                }}
              ></input>
            </div>
            <div>
              Numero d'idiomes:{" "}
              <input
                type="text"
                placeholder="0"
                onChange={function (e) {
                  totalWebServices(e.target.value);
                }}
              ></input>
            </div>
          </>
        ) : (
          <div></div>
        )}
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
