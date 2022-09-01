import HistoryChart from "../components/HistoryChart";
import CoinDetail from "../components/CoinDetail";
import "../styles/CryptoDetail.css";

export default function CryptoDetail() {
  return (
    <div className="CryptoDetail__container">
      <CoinDetail />
      <HistoryChart />
    </div>
  );
}
