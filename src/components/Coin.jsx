// TODO

import React from "react";
import CoinList from "./CoinList";

export default function Coin({ coin }) {
  return (
    <tr className="market__list">
      <CoinList coin={coin} />
    </tr>
  );
}
