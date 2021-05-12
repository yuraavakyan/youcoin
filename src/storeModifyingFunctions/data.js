import store from "../redux/store";
import * as actions from "../redux/actions";
import { sortDataIn } from "../dataProcessingFunctions";

export const getCoins = async (currency, skip, count) => {
  const raw = await fetch(
    `https://api.coinstats.app/public/v1/coins?skip=${skip}&currency=${currency}&limit=${count}`
  );
  const data = await raw.json();
  store.dispatch(actions.getCoins(data.coins));
};

export const getCoin = async (id, currency) => {
  const raw = await fetch(
    `https://api.coinstats.app/public/v1${id}?currency=${currency}`
  );
  const data = await raw.json();
  return data.coin;
};

export const getCurrencies = async () => {
  const raw = await fetch(`https://api.coinstats.app/public/v1/fiats`);
  const data = await raw.json();
  store.dispatch(actions.getCurrencies(data));
};

export const changeCurrency = (currency) => {
  store.dispatch(actions.changeCurrency(currency.name, currency.symbol));
};

export const changePage = (page, coinsToSkip) => {
  store.dispatch(actions.changePage(page, coinsToSkip));
};

export const darkModeActivated = (isDark) => {
  store.dispatch(actions.darkModeActivated(isDark));
};

export const changePerPage = (perPage) => {
  store.dispatch(actions.changePerPage(perPage));
  store.dispatch(actions.changePage(1, 0));
};

export const sortData = (array, criteria, asc) => {
  sortDataIn(array, criteria, asc);
  store.dispatch(actions.sortData(array));
};

export const changePeriodChanged = (changePeriod) => {
  store.dispatch(actions.changePeriodChanged(changePeriod));
};

export const columnsShownChanged = (columnsShown) => {
  store.dispatch(actions.columnsShownChanged(columnsShown));
};
