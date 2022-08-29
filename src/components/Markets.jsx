import useAxios from "../hooks/useAxios";
import CoinBodyTable from "./CoinBodyTable";
import CoinHeaderTable from "./CoinHeaderTable";
import "../styles/Markets.css";

export default function Markets() {
  const { response, loading } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  if (loading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  const columns = [
    { label: "#", accessor: "rank" },
    { label: "Coin", accessor: "coin" },
    { label: "Price", accessor: "price" },
    { label: "24h", accessor: "24H" },
    { label: "24h Volume", accessor: "24h_Volume" },
    { label: "Mkt Cap", accessor: "Mkt_Cap" },
  ];

  return (
    <div className="market__container">
      <table className="market__ul ">
        <CoinHeaderTable columns={columns} />
        <CoinBodyTable response={response} />
      </table>
    </div>
  );
}
