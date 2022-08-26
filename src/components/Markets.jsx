import useAxios from "../hooks/useAxios";
import CryptoHome from "../pages/CryptoHome";

export default function Markets() {
  const { response } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  console.log(response);
  return (
    <ul>
      {response.map((coin) => {
        return (
          <li>
            {coin.name} {coin.symbol}
            <img className="market__image" src={coin.image} alt={coin.name} />
          </li>
        );
      })}
    </ul>
  );
}
