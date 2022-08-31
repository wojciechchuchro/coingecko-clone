import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

export default function HistoryChart() {
  const { id } = useParams();
  const { response, loading } = useAxios(
    `coins/${id}/market_chart?vs_currency=usd&days=7`
  );

  if (!response) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
  return <div>HistoryChart</div>;
}
