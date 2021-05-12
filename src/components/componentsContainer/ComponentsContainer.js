import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCoins } from "../../storeModifyingFunctions/data";
import MockTable from "../mockTable/MockTable";
import Table from "../table/Table";
import { dataBuilder } from "./dataBuilder";

const ComponentsContainer = () => {
  const { currency, coins, perPage, coinsToSkip } = useSelector(
    (state) => state
  );
  useEffect(() => {
    getCoins(currency, coinsToSkip, perPage);
  }, [currency, coinsToSkip, perPage] );
  debugger;
  const columns = ["id", "name", "price"];
  const arr = dataBuilder(coins, currency);

  return (
    <div>
      <MockTable headers={columns} data={arr} />
    </div>
  );
};

export default ComponentsContainer;
