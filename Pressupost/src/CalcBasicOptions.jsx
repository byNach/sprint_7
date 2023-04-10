
import { useEffect } from "react";
import { prices } from "./webPrices";

let webPrice = Number;
let seoPrice = Number;
let adsPrice = Number;

useEffect(() => {
  web ? (webPrice = prices.webPage$) : (webPrice = 0);
  seo ? (seoPrice = prices.seoConsulting$) : (seoPrice = 0);
  ads ? (adsPrice = prices.googleAdsService$) : (adsPrice = 0);
  setTotalBasics(webPrice + seoPrice + adsPrice);
}, [web, seo, ads]);

const CalcBasic = () => {
  return(
    setTotalBasics
  )
}

export default CalcBasic;