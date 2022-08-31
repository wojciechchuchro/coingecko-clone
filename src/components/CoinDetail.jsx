import React from "react";
import useAxios from "../hooks/useAxios";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronRight } from "../icons/icons";
import {
  currencyFormatWithoutDollar,
  getIndexFromResponse,
  percentageColorDetails,
  currencyFormat,
} from "../utils/UsefulFunctions";
import "../styles/CoinDetail.css";

export default function CoinDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { response } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  if (!response) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  const index = getIndexFromResponse(response, id);

  return (
    <>
      {/* Navigation detail */}
      <div className="details__nav">
        <div
          className="details__nav__coins details__nav__green"
          onClick={() => navigate("/")}
        >
          Coins
        </div>
        <span className="details__nav__green">
          <ChevronRight />
        </span>
        <div className="details__nav__name">{response[index].name} Price</div>
      </div>
      {/* detail content */}
      <div className="details__content">
        <div>
          <div className="details__badge">
            Rank #{response[index].market_cap_rank}
          </div>
          <div className="details__container">
            <div className="details__flex">
              <img
                className="details__image"
                src={response[index].image}
                alt={response[index].name}
              />
              <span className="details__name">{response[index].name} </span>
              <span className="details__symbol">
                ({response[index].symbol}){" "}
              </span>
            </div>
            <span>{currencyFormat(response[index].current_price)}</span>
            <span
              className={percentageColorDetails(
                response[index].price_change_percentage_24h.toFixed(1)
              )}
            >
              {response[index].price_change_percentage_24h.toFixed(1)}%
            </span>
          </div>
        </div>
        <div className="details__footer">
          <div className="details__footer__div">
            <span className="details__footer__grey">Market Cap</span>{" "}
            {currencyFormat(response[index].market_cap)}
          </div>
          <div className="details__footer__div">
            <span className="details__footer__grey">Circulating Supply</span>{" "}
            {currencyFormatWithoutDollar(response[index].circulating_supply)}
          </div>
          <div className="details__footer__div">
            <span className="details__footer__grey">Total Supply</span>{" "}
            {currencyFormatWithoutDollar(response[index].total_supply)}
          </div>
        </div>
      </div>
    </>
  );
}
