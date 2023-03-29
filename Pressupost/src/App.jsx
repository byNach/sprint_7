import { useEffect, useState } from "react";
import "./App.css";
import { prices } from "./webPrices";

function App() {
  //Estado para saber si se ha selecionado la ópción de página web. Al selecionarse, se despliega un div con las opciones adicionales. Al desseleccionar, desaparece.

  const [webChecked, setwebChecked] = useState(false);
  const showWebOption = (e) =>
    e.target.checked ? setwebChecked(true) : setwebChecked(false);

  //Estados para saber las opciones selecionadas

  const [web, setWeb] = useState(false);
  const [seo, setSeo] = useState(false);
  const [ads, setAds] = useState(false);
  const [pages, setPages] = useState(false);
  const [languages, setLanguages] = useState(false);

  const webSelected = () => (web ? setWeb(false) : setWeb(true), adWeb());
  const seoSelected = () => (seo ? setSeo(false) : setSeo(true), adSeo());
  const googleAdsSelected = () => (ads ? setAds(false) : setAds(true), adAds());
  const pagesSelected = (props) => (
    pages ? setPages(false) : setPages(true), adPages(props)
  );
  const languagesSelected = (props) => (
    languages ? setLanguages(false) : setLanguages(true), adLanguages(props)
  );

  //Calculo del total de opciones básicas

  const [totalBasics, setTotalBasics] = useState(0);

  const adWeb = () => {
    web
      ? setTotalBasics(totalBasics - prices.webPage$)
      : setTotalBasics(totalBasics + prices.webPage$);
  };
  const adSeo = () => {
    seo
      ? setTotalBasics(totalBasics - prices.seoConsulting$)
      : setTotalBasics(totalBasics + prices.seoConsulting$);
  };
  const adAds = () => {
    ads
      ? setTotalBasics(totalBasics - prices.googleAdsService$)
      : setTotalBasics(totalBasics + prices.googleAdsService$);
  };

  // Calculo de las opciones adicionales

  const [totalPagesPrice, setTotalPagesPrice] = useState(0);
  const adPages = (props) => {
    setTotalPagesPrice(props.target.value * prices.addPagesOnWeb$);
  };

  const [totalLanguagesPrice, setTotalLanguagesPrice] = useState(0);
  const adLanguages = (props) => {
    setTotalLanguagesPrice(props.target.value * prices.addLanguagesOnWeb$);
  };

  const [totalOptions, setTotalOptions] = useState(0);
  useEffect(() => {
    setTotalOptions(totalPagesPrice + totalLanguagesPrice);
  }, [totalPagesPrice, totalLanguagesPrice]);

  // Calculo del total. Basics + opciones

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(totalBasics + totalOptions);
  }, [totalBasics, totalOptions]);

  return (
    <div>
      <p>¿Qué necessites que fem per tu?</p>
      <div>
        <input
          type="checkbox"
          id="webCheckbox"
          onClick={showWebOption}
          onChange={webSelected}
        ></input>
        Una pàgina web (500 €)
        {webChecked ? (
          <>
            <div>
              Numero de pàgines:{""}
              <input
                type="text"
                id="numPages"
                placeholder="0"
                onChange={pagesSelected}
              ></input>
            </div>
            <div>
              Numero d'idiomes:{""}
              <input
                type="text"
                id="numLanguages"
                placeholder="0"
                onChange={languagesSelected}
              ></input>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        <input type="checkbox" id="seoCheckbox" onChange={seoSelected}></input>
        Una consultoria SEO (300 €)
      </div>
      <div>
        <input
          type="checkbox"
          id="googleAdsCheckbox"
          onChange={googleAdsSelected}
        ></input>
        Una campanya de Google Ads (200 €)
      </div>
      <div>Preu: {total} €</div>
    </div>
  );
}

export default App;
