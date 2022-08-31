import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import moment from "moment";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { returnMinMax } from "../utils/UsefulFunctions";
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
      x: value[0],
      y: value[1].toFixed(2),
    }));

  return (
    <div>
      <h1>Bitcoin Price Chart (BTC/USD) 30d</h1>

      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={returnMinMax()} />
        <Tooltip cursor={{ stroke: "#ccc", strokeWidth: 1 }} />
        <Legend verticalAlign="top" />
        <Line type="monotone" name="BTC / USD" dataKey="y" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
