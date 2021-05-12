import React from "react";
import MockRow from "./MockRow";

const MockTableBody = (props) => {
  return (
    <>
      {props.data.map((el) => {
        return <MockRow data={el} />;
      })}
    </>
  );
};

export default MockTableBody;
