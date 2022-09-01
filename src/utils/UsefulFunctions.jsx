import useAxios from "../hooks/useAxios";

export function currencyFormat(num) {
  if (!num) return;
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
export function currencyFormatWithoutDollar(num) {
  if (!num) return;
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function currencyFormatPercentage(num) {
  if (!num) return;
  return num.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "%";
}

export function percentageColor(percentage) {
  if (percentage < 0) {
    return "red__color market__span__container market__justify__content__right";
  }
  if (percentage >= 0) {
    return "green__color market__span__container market__justify__content__right";
  }
}

export function percentageColorDetails(percentage) {
  if (percentage < 0) {
    return "red__color";
  }
  if (percentage >= 0) {
    return "green__color";
  }
}

export function getIndexFromResponse(response, id) {
  const index = response && response.findIndex((res) => res.id === id);
  return index;
}
export function returnMinMax(response) {
  const arr = [];
  response && response.prices.forEach((value) => arr.push(value[1]));
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];
}

export function BitcoinPrice(id) {
  const { response } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  if (!response) {
    return <div>Loading</div>;
  }
  const index = getIndexFromResponse(response, id);

  return `${response[index].symbol.toUpperCase()} / USD`;
}
