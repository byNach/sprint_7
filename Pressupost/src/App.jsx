import { useEffect, useState } from "react";
import "./App.css";
import { prices } from "./webPrices";
import OptionsDiv from "./assets/styles/styled-options-div";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";

function App() {
  //Estado para saber si se ha selecionado la ópción de página web. Al selecionarse, se despliega un div con las opciones adicionales. Al deseleccionar, desaparece.

  const [webChecked, setwebChecked] = useState(false);
  const showWebOption = (e) =>
    e.target.checked ? setwebChecked(true) : setwebChecked(false);

  //Estados para saber las opciones selecionadas

  const [web, setWeb] = useState(false);
  const [seo, setSeo] = useState(false);
  const [ads, setAds] = useState(false);
  const [pages, setPages] = useState(false);
  const [languages, setLanguages] = useState(false);

  const webSelected = () => (
    web
      ? setWeb(false) & setTotalPages(0) & setTotalLanguages(0)
      : setWeb(true),
    adWeb()
  );
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

  //Adquisición del numero de páginas e idiomas adicionales

  const [totalPages, setTotalPages] = useState(0);
  const adPages = (props) => {
    setTotalPages(props.target.value);
  };
  const [totalLanguages, setTotalLanguages] = useState(0);
  const adLanguages = (props) => {
    setTotalLanguages(props.target.value);
  };

  //Calculo del precio total de las páginas e idiomas adicionales

  const [totalPagesPrice, setTotalPagesPrice] = useState(0);
  useEffect(() => {
    setTotalPagesPrice(totalPages * prices.addPagesOnWeb$);
  });
  const [totalLanguagesPrice, setTotalLanguagesPrice] = useState(0);
  useEffect(() => {
    setTotalLanguagesPrice(totalLanguages * prices.addLanguagesOnWeb$);
  });

  //Calculo del total del precio total de las opciones adicionales

  const [totalOptions, setTotalOptions] = useState(0);
  useEffect(() => {
    setTotalOptions(totalPagesPrice + totalLanguagesPrice);
  }, [totalPagesPrice, totalLanguagesPrice]);

  //Calculo del total. Basics + opciones adicionales

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(totalBasics + totalOptions);
  }, [totalBasics, totalOptions]);

  //Lógica de botones para añadir o quitar páginas

  const morePagesButton = () => {
    setTotalPages(totalPages + 1);
  };
  const lessPagesButton = () => {
    if (totalPages !== 0) {
      setTotalPages(totalPages - 1);
    }
  };

  const moreLanguagesButton = () => {
    setTotalLanguages(totalLanguages + 1);
  };
  const lessLanguagesButton = () => {
    if (totalLanguages !== 0) {
      setTotalLanguages(totalLanguages - 1);
    }
  };

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
          <OptionsDiv>
            <div>
              Numero de pàgines:{""}
              <BsPlusCircle
                style={{ color: "blue", fontSize: "20px" }}
                onClick={morePagesButton}
              ></BsPlusCircle>
              <input
                type="text"
                id="numPages"
                value={totalPages}
                onChange={pagesSelected}
              ></input>
              <BsDashCircle
                style={{ color: "red", fontSize: "20px" }}
                onClick={lessPagesButton}
              ></BsDashCircle>
            </div>
            <div>
              Numero d'idiomes:{""}
              <BsPlusCircle
                style={{ color: "blue", fontSize: "20px" }}
                onClick={moreLanguagesButton}
              ></BsPlusCircle>
              <input
                type="text"
                id="numLanguages"
                value={totalLanguages}
                onChange={languagesSelected}
              ></input>
              <BsDashCircle
                style={{ color: "red", fontSize: "20px" }}
                onClick={lessLanguagesButton}
              ></BsDashCircle>
            </div>
          </OptionsDiv>
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
