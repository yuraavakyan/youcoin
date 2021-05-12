import * as actionsTypes from "./actionTypes";

export const getCoins = (coins) => {
  return {
    type: actionsTypes.GET_COINS,
    payload: {
      coins,
    },
  };
};

export const sortData = (coins) => {
  return {
    type: actionsTypes.SORT_DATA,
    payload: {
      coins,
    },
  };
};

export const changePerPage = (perPage) => {
  return {
    type: actionsTypes.CHANGE_PER_PAGE,
    payload: {
      perPage,
    },
  };
};

export const changeCurrency = (name, symbol) => {
  return {
    type: actionsTypes.CHANGE_CURRENCY,
    payload: {
      name,
      symbol,
    },
  };
};

export const getCurrencies = (currencies) => {
  return {
    type: actionsTypes.GET_CURRENCIES,
    payload: {
      currencies,
    },
  };
};

export const changePage = (page, coinsToSkip) => {
  return {
    type: actionsTypes.CHANGE_PAGE,
    payload: {
      page,
      coinsToSkip,
    },
  };
};

export const contentDivided = (content) => {
  return {
    type: actionsTypes.CONTENT_DIVIDED,
    payload: {
      content,
    },
  };
};

export const darkModeActivated = (isDark) => {
  return {
    type: actionsTypes.CONTENT_DIVIDED,
    payload: {
      isDark,
    },
  };
};

export const changePeriodChanged = (changePeriod) => {
  return {
    type: actionsTypes.CHANGE_PERIOD_CHANGED,
    payload: {
      changePeriod,
    },
  };
};

export const columnsShownChanged = (columnsShown) => {
  return {
    type: actionsTypes.COLUMNS_SHOWN_CHANGED,
    payload: {
      columnsShown,
    },
  };
};
