import React from "react";
import { StarIcon } from "../icons/icons";
import "../styles/CoinList.css";

export default function CoinList({ coin }) {
  function percentageColor(percentage) {
    if (percentage < 0) {
      return "red__color";
    }
    if (percentage > 0) {
      return "green__color";
    }
    if (percentage === 0.0) {
      return "grey__color";
    }
  }
  return (
    <tr>
      <td>
        {" "}
        <StarIcon /> {coin.market_cap_rank}.
      </td>
      <td>
        <div className="market__span__container">
          <span className="market__span">
            <img className="market__image" src={coin.image} alt={coin.name} />
          </span>
          <span className="market__span market__name">{coin.name}</span>
          <span className="market__span__symbol ">{coin.symbol}</span>
        </div>
      </td>
      <td>$ {coin.current_price}</td>
      <td>
        <div className={percentageColor(coin.price_change_percentage_24h)}>
          {coin.price_change_percentage_24h.toFixed(2)}
        </div>
      </td>
      <td>
        ${" "}
        {coin.total_volume.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
      </td>
      <td>
        ${" "}
        {coin.market_cap.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
      </td>
    </tr>
  );
}
