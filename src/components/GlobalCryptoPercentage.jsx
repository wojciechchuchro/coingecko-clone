import React from "react";
import useAxios from "../hooks/useAxios";
import {
  percentageColorDetails,
  currencyFormatPercentage,
} from "../utils/UsefulFunctions";

export default function GlobalCryptoPercentage() {
  const { response } = useAxios("global");
  console.log(response);
  return (
    <span
      className={percentageColorDetails(
        response && response.data.market_cap_change_percentage_24h_usd
      )}
    >
      {currencyFormatPercentage(
        response && response.data.market_cap_change_percentage_24h_usd
      )}{" "}
    </span>
  );
}
