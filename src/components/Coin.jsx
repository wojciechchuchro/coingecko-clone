import React from "react";
import { StarIcon } from "../icons/icons";
import { Link } from "react-router-dom";
import { currencyFormat, percentageColor } from "../utils/UsefulFunctions";

export default function Coin({ c }) {
  return (
    <Link className="link" to={`/coin/${c.id}`}>
      <div className="market__coin__body">
        <div className="market__span__container">
          <StarIcon /> {c.market_cap_rank}
        </div>
        <div className="market__span__container market__margin__left ">
          <span className="market__span">
            <img className="market__image" src={c.image} alt={c.name} />
          </span>
          <span className="market__name market__margin__left">{c.name}</span>
          <span className="market__span__symbol market__margin__left ">
            {c.symbol}
          </span>
        </div>
        <div className="market__span__container market__justify__content__right">
          ${c.current_price}
        </div>
        <div className={percentageColor(c.price_change_percentage_24h)}>
          {c.price_change_percentage_24h.toFixed(1)}%
        </div>
        <div className="market__span__container market__justify__content__right">
          {currencyFormat(c.total_volume)}
        </div>
        <div className="market__span__container market__justify__content__right">
          {currencyFormat(c.market_cap)}
        </div>
      </div>
    </Link>
  );
}
