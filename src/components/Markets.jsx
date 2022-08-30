import useAxios from "../hooks/useAxios";
import Coin from "./Coin.jsx";
import "../styles/Markets.css";
import CoinHeader from "./CoinHeader";

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
    { column: "#", key: "rank" },
    { column: "Coin", key: "coin" },
    { column: "Price", key: "price" },
    { column: "24h", key: "24H" },
    { column: "24h Volume", key: "24h_Volume" },
    { column: "Mkt Cap", key: "Mkt_Cap" },
  ];

  return (
    <section className="market__container">
      <div className="market__coin__header market__coin__body market__justify__content__center">
        {columns.map(({ column, key }) => (
          <CoinHeader key={key} column={column} />
        ))}
      </div>
      {response && response.map((c) => <Coin key={c.id} c={c} />)}
    </section>
  );
}
