import useAxios from "../hooks/useAxios";
import CoinList from "./CoinList.jsx";
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
  return (
    <div className="market__container">
      <table className="market__ul ">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Kurs</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Mkt Cap</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.map((coin) => {
              return <CoinList key={coin.id} coin={coin} />;
            })}
        </tbody>
      </table>
    </div>
  );
}
