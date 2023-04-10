import React from "react";
import { useState, useEffect } from "react";
import { prices } from "./webPrices";
import {
  OptionsGeneralDiv,
  OptionsDiv,
} from "./assets/styles/styled-options-div";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";

const Budget = () => {
  // Todos los estados y obtención del localStorage

  const [webChecked, setwebChecked] = useState(
    localStorage.getItem("webChecked") === "true"
  );
  const [web, setWeb] = useState(localStorage.getItem("web") === "true");
  const [seo, setSeo] = useState(localStorage.getItem("seo") === "true");
  const [ads, setAds] = useState(localStorage.getItem("ads") === "true");
  const [pages, setPages] = useState(localStorage.getItem("pages") === "true");
  const [languages, setLanguages] = useState(
    localStorage.getItem("languages") === "true"
  );
  const [totalBasics, setTotalBasics] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalLanguages, setTotalLanguages] = useState(0);
  const [totalPagesPrice, setTotalPagesPrice] = useState(0);
  const [totalLanguagesPrice, setTotalLanguagesPrice] = useState(0);
  const [totalOptions, setTotalOptions] = useState(0);
  const [total, setTotal] = useState(0);

  //Lógica para saber si se ha selecionado la ópción de página web. Al selecionarse, se despliega un div con las opciones adicionales. Al deseleccionar, desaparece.

  const showWebOption = (e) =>
    e.target.checked ? setwebChecked(true) : setwebChecked(false);
  useEffect(() => {
    localStorage.setItem("webChecked", webChecked.toString());
  }, [webChecked]);

  //Lógica para saber las opciones selecionadas

  const webSelected = () =>
    web
      ? setWeb(false) & setTotalPages(0) & setTotalLanguages(0)
      : setWeb(true);
  useEffect(() => {
    localStorage.setItem("web", web.toString());
  }, [web]);
  const seoSelected = () => (seo ? setSeo(false) : setSeo(true));
  useEffect(() => {
    localStorage.setItem("seo", seo.toString());
  }, [seo]);
  const googleAdsSelected = () => (ads ? setAds(false) : setAds(true));
  useEffect(() => {
    localStorage.setItem("ads", ads.toString());
  }, [ads]);
  const pagesSelected = (props) => (
    pages ? setPages(false) : setPages(true), adPages(props)
  );
  const languagesSelected = (props) => (
    languages ? setLanguages(false) : setLanguages(true), adLanguages(props)
  );

  //Calculo del total de opciones básicas

  let webPrice = Number;
  let seoPrice = Number;
  let adsPrice = Number;

  useEffect(() => {
    web ? (webPrice = prices.webPage$) : (webPrice = 0);
    seo ? (seoPrice = prices.seoConsulting$) : (seoPrice = 0);
    ads ? (adsPrice = prices.googleAdsService$) : (adsPrice = 0);
    setTotalBasics(webPrice + seoPrice + adsPrice);
  }, [web, seo, ads]);

  //Adquisición del numero de páginas e idiomas adicionales

  const adPages = (props) => {
    setTotalPages(props.target.value);
  };
  useEffect(() => {
    localStorage.setItem("pages", totalPages.toString());
  }, [totalPages]);
  const adLanguages = (props) => {
    setTotalLanguages(props.target.value);
  };
  useEffect(() => {
    localStorage.setItem("languages", totalLanguages.toString());
  }, [totalLanguages]);

  //Calculo del precio total de las páginas e idiomas adicionales

  useEffect(() => {
    setTotalPagesPrice(totalPages * prices.addPagesOnWeb$);
  });
  useEffect(() => {
    setTotalLanguagesPrice(totalLanguages * prices.addLanguagesOnWeb$);
  });

  //Calculo del total del precio total de las opciones adicionales

  useEffect(() => {
    setTotalOptions(totalPagesPrice + totalLanguagesPrice);
  }, [totalPagesPrice, totalLanguagesPrice]);

  //Calculo del total. Basics + opciones adicionales

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
          checked={webChecked}
          onClick={showWebOption}
          onChange={webSelected}
        ></input>
        Pàgina web (500 €)
        {webChecked ? (
          <OptionsGeneralDiv>
            <OptionsDiv>
              Numero de pàgines:{""}
              <BsPlusCircle
                style={{
                  color: "blue",
                  fontSize: "20px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                onClick={morePagesButton}
              ></BsPlusCircle>
              <input
                type="text"
                id="numPages"
                value={totalPages}
                onChange={pagesSelected}
              ></input>
              <BsDashCircle
                style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}
                onClick={lessPagesButton}
              ></BsDashCircle>
            </OptionsDiv>
            <OptionsDiv>
              Numero d'idiomes:{""}
              <BsPlusCircle
                style={{
                  color: "blue",
                  fontSize: "20px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                onClick={moreLanguagesButton}
              ></BsPlusCircle>
              <input
                type="text"
                id="numLanguages"
                value={totalLanguages}
                onChange={languagesSelected}
              ></input>
              <BsDashCircle
                style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}
                onClick={lessLanguagesButton}
              ></BsDashCircle>
            </OptionsDiv>
          </OptionsGeneralDiv>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        <input
          type="checkbox"
          id="seoCheckbox"
          checked={seo}
          onChange={seoSelected}
        ></input>
        Consultoria SEO (300 €)
      </div>
      <div>
        <input
          type="checkbox"
          id="googleAdsCheckbox"
          checked={ads}
          onChange={googleAdsSelected}
        ></input>
        Campanya de Google Ads (200 €)
      </div>
      <div>Preu: {total} €</div>
    </div>
  );
};

export default Budget;
