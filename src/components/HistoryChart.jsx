import React from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import "../styles/HistoryChart.css";
import {
  currencyFormat,
  returnMinMax,
  BitcoinPrice,
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

  if (!response) {
    <div>loading</div>;
  }

  const data =
    response &&
    response.prices.map((value) => ({
      date: moment(value[0]).format("MMM DD"),
      x: value[0].toFixed(2),
      y: value[1].toFixed(2),
    }));

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
      <h1>
        Bitcoin Price Chart{" "}
        <span className="bitcoin__price__span">{BitcoinPrice(id)}</span>
      </h1>

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
        <Line
          type="monotone"
          name={BitcoinPrice(id)}
          dataKey="y"
          stroke="#8884d8"
          strokeWidth="3"
        />
      </LineChart>
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
        <div className="history__progress__content">30 Day Range</div>
        <div className="history__progress__content">
          {currencyFormat(getProgress("max"))}
        </div>
      </div>
    </div>
  );
}
