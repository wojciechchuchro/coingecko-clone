export function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function percentageColor(percentage) {
  if (percentage < 0) {
    return "red__color market__span__container market__justify__content__right";
  }
  if (percentage >= 0) {
    return "green__color market__span__container market__justify__content__right";
  }
}
