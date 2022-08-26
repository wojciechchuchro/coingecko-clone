import React from "react";

export default function CoinList({ coin }) {
  console.log(coin);
  return (
    <>
      <td>{coin.market_cap_rank}.</td>
      <td>
        <span className="market__span__container">
          <img className="market__image" src={coin.image} alt={coin.name} />{" "}
          {coin.name} <span className="market__span">{coin.symbol}</span>
        </span>
      </td>
      <td>{coin.current_price}</td>
    </>
  );
}
