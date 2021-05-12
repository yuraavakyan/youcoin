import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCoins, sortData } from "../../storeModifyingFunctions/data";
import Row from "./components/row/Row";
import "./table.scss";
import { useHistory } from "react-router";
import Pagination from "../pagination/Pagination";
import { getColumns } from "../helpingFunctions";
import ColumnsSelect from "./components/columnsSelect/ColumnsSelect";

const Table = () => {
  const [columns, setColumns] = useState([]);
  const [sort, setSort] = useState({});
  const history = useHistory();
  const { currency, coins, perPage, coinsToSkip } = useSelector(
    (state) => state
  );
  const columnsList = [
    "rank",
    "name",
    "priceChange1h",
    "priceChange1d",
    "priceChange1w",
    "price",
    "priceInBtc",
    "marketCap",
    "volume",
    "availableSupply",
    "totalSupply",
  ];

  useEffect(() => {
    const cols = getColumns();
    setColumns(cols);
  }, []);

  useEffect(() => {
    getCoins(currency.name, coinsToSkip, perPage);
  }, [currency, perPage, coinsToSkip, columns]);

  const updateState = (newState) => {
    setColumns(newState);
  };

  const handleSortClick = (element) => {
    setSort({
      criteria: element,
      asc: !sort.asc,
    });
    sortData(coins, sort.criteria, sort.asc);
  };

  return (
    <div className="table">
      <ColumnsSelect
        updateState={updateState}
        columns={columns}
        columnsList={columnsList}
      />
      <table>
        <tbody>
          <tr>
            {columns?.map((el) => {
              return (
                <th onClick={() => handleSortClick(el.name)}>{el.name}</th>
              );
            })}
            <th>Favorite</th>
          </tr>
          {coins?.map((el) => {
            return (
              <tr
                key={el.name}
                className="table-row"
                onClick={() => {
                  history.push(`/coins/${el.id}`);
                }}
              >
                <Row coin={el} columns={columns} />
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Table;
