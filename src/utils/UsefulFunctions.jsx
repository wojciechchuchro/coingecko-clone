export function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
export function currencyFormatWithoutDollar(num) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
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
export function returnMinMax() {
  const arr = [];
  response && response.prices.forEach((value) => arr.push(value[1]));
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];
}
