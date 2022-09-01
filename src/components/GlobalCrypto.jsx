import React from "react";
import useAxios from "../hooks/useAxios";
import "../styles/GlobalCrypto.css";
import {
  percentageColorDetails,
  currencyFormatWithoutDollar,
  currencyFormatPercentage,
} from "../utils/UsefulFunctions";
import GlobalCryptoPercentage from "./GlobalCryptoPercentage";

export default function GlobalCrypto() {
  const { response } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  const { res } = useAxios("global");
  console.log(res);
  if (!response) {
    return <div>Loading</div>;
  }

  console.log(response);

  function global() {
    let total = 0;
    for (let i = 0; i < response.length; i++) {
      total = total + response[i].market_cap;
    }
    return total;
  }

  return (
    <div>
      <div className="global__header">
        <h1 className="global__h1">Cryptocurrency Prices by Market Cap</h1>
      </div>
      <div className="global__body">
        <p>
          The global cryptocurrency market cap today is $
          {currencyFormatWithoutDollar(global())} Trillion, a{" "}
          <GlobalCryptoPercentage />
          change in the last 24 hours.
        </p>
      </div>
    </div>
  );
}
