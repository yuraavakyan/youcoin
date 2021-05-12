import React from "react";

const MockRow = (props) => {
  return (
    <tr>
      {props.data.map((el) => {
        return <td>{el.value()}</td>;
      })}
    </tr>
  );
};

export default MockRow;
