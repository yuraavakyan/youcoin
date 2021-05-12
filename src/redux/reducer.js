import * as actionTypes from "./actionTypes";

const initialState = {
  coins: [],
  currencies: [],
  currency: {
    name: "USD",
    symbol: "$",
  },
  perPage: 20,
  changePeriod: "1h",
  page: 1,
  coinsToSkip: 0,
  selectedCoin: {},
  isDark: false,
  columnsShown: [
    { name: "#", value: "#" },
    { name: "Name", value: "name" },
    { name: "1H Change", value: "priceChange1H" },
    { name: "Price", value: "price" },
    { name: "Market Cap", value: "marketCap" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COINS:
      return {
        ...state,
        coins: action.payload.coins,
      };
    case actionTypes.SORT_DATA:
      return {
        ...state,
        coins: action.payload.coins,
      };
    case actionTypes.CHANGE_PER_PAGE:
      return {
        ...state,
        perPage: action.payload.perPage,
      };
    case actionTypes.CHANGE_CURRENCY:
      return {
        ...state,
        currency: {
          name: action.payload.name,
          symbol: action.payload.symbol,
        },
      };
    case actionTypes.GET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload.currencies,
      };

    case actionTypes.CHANGE_PAGE:
      return {
        ...state,
        page: action.payload.page,
        coinsToSkip: action.payload.coinsToSkip,
      };
    case actionTypes.DARK_MODE_ACTIVATED:
      return {
        ...state,
        isDark: action.payload.isDark,
      };

    case actionTypes.CHANGE_PERIOD_CHANGED:
      return {
        ...state,
        changePeriod: action.payload.changePeriod,
      };
    case actionTypes.COLUMNS_SHOWN_CHANGED:
      return {
        ...state,
        columnsShown: action.payload.columnsShown,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
