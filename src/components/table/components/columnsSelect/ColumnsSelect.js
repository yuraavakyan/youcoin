import React from "react";
import "./columnsSelect.scss";
import {
  getColumns,
  removeColumn,
  addColumn,
  indexOfItem,
} from "../../../helpingFunctions";
const ColumnsSelect = (props) => {
  const list = props.columnsList;
  const handleChecked = (e) => {
    if (!e.target.checked) {
      removeColumn(e.target.name);
    } else {
      addColumn(e.target.name);
    }
    props.updateState(getColumns());
  };

  return (
    <div className="columns-select">
      {list.map((el) => {
        return (
          <div>
            <input
              type="checkbox"
              name={el}
              value={el}
              onChange={handleChecked}
              className={el}
            ></input>
            <label for={el}>{el}</label>
          </div>
        );
      })}

      {/* <input
        type="checkbox"
        name="price"
        value="price"
        onChange={handleChecked}
      ></input>
      <label for="price">Price</label>
      <input
        type="checkbox"
        name="change1d"
        value="1d"
        onChange={handleChecked}
      ></input>
      <label for="change1d">change 1d</label>
      <input
        type="checkbox"
        name="change1w"
        value="1h"
        onChange={handleChecked}
      ></input>
      <label for="change1w">change 1w</label> */}
    </div>
  );
};

export default ColumnsSelect;
