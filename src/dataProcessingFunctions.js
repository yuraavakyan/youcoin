export const numberFormatter = (number) => {
  if (number > 999 && number <= 999_999) {
    return `${(number / 1000).toFixed(1)}K`;
  } else if (number > 999_999 && number <= 999_999_999) {
    return `${(number / 1e6).toFixed(1)}M`;
  } else if (number > 999_999_999 && number <= 999_999_999_999) {
    return `${(number / 1e9).toFixed(1)}B`;
  } else if (number > 999_999_999_999) {
    return `${(number / 1e12).toFixed(1)}T`;
  }
};

export const sortDataIn = (array, criteria, asc) => {
  switch (criteria) {
    case "#":
      array.sort((a, b) => {
        if (a.rank > b.rank) {
          return asc ? -1 : 1;
        } else return asc ? 1 : -1;
      });
      break;

    case "Name":
      array.sort((a, b) => {
        if (a.name > b.name) {
          return asc ? -1 : 1;
        } else return asc ? 1 : -1;
      });
      break;

    case "1H Change":
      array.sort((a, b) => {
        if (a.priceChange1h > b.priceChange1h) {
          return asc ? -1 : 1;
        } else return asc ? 1 : -1;
      });
      break;

    case "Price":
      array.sort((a, b) => {
        if (a.price > b.price) {
          return asc ? -1 : 1;
        } else return asc ? 1 : -1;
      });
      break;
    case "Market Cap":
      array.sort((a, b) => {
        if (a.marketCap > b.marketCap) {
          return asc ? -1 : 1;
        } else return asc ? 1 : -1;
      });
      break;
    default:
      console.log("wrong");
  }
};
