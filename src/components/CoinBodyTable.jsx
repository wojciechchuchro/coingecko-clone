import React from "react";
import CoinList from "./CoinList";

export default function CoinBodyTable({ response }) {
  return (
    <tbody>
      {response &&
        response.map((coin) => {
          return <CoinList key={coin.id} coin={coin} />;
        })}
    </tbody>
  );
}
