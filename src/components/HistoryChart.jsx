import React from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import "../styles/HistoryChart.css";
import {
  currencyFormat,
  returnMinMax,
  getIndexFromResponse,
} from "../utils/UsefulFunctions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function HistoryChart() {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`
  );
  const { res } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  if (!response) {
    <div>loading</div>;
  }

  console.log(res);

  const data =
    response &&
    response.prices.map((value) => ({
      date: moment(value[0]).format("MMM DD"),
      x: value[0],
      y: value[1],
    }));

  const index = getIndexFromResponse(res, id);

  function name() {
    const value = res && res[index].symbol;
    return `${value} / USD`;
  }

  function getProgress(depencdency) {
    const [min, max] = returnMinMax(response);
    const value = response && response.prices[30][1];
    if (depencdency === "min") {
      return min;
    }
    if (depencdency === "max") {
      return max;
    }
    if (depencdency === "value") {
      return value;
    }
  }

  return (
    <div>
      <div className="history__progress__container">
        <div className="history__progress_div ">
          <progress
            className="history__progress"
            min={getProgress("min")}
            max={getProgress("max")}
            value={getProgress("value")}
          />
        </div>
        <div className="history__progress__content">
          {currencyFormat(getProgress("min"))}
        </div>
        <div className="history__progress__content">24H range</div>
        <div className="history__progress__content">
          {currencyFormat(getProgress("max"))}
        </div>
      </div>

      <h1>Bitcoin Price Chart {name()} 30d</h1>

      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={returnMinMax(response)} />
        <Tooltip cursor={{ stroke: "#ccc", strokeWidth: 1 }} />
        <Legend verticalAlign="top" />
        <Line type="monotone" name={name()} dataKey="y" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
