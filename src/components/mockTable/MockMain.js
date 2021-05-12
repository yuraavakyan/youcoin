import React from "react";
import MockTable from "./MockTable";

const headers = ["1", "2", "3"];

const data = [
  [
    {
      id: "#",
      value() {
        return "#";
      },
    },
    {
      id: "name",
      value() {
        return (
          <div>
            <span>Bitcoin</span>
            <span>
              <img src="url()"></img>
            </span>
          </div>
        );
      },
    },
    {
      id: "price",
      value() {
        return (13456.09876).toFixed(2);
      },
    },
  ],
];

const MockMain = () => {
  return (
    <div>
      <MockTable headers={headers} data={data} />
    </div>
  );
};

export default MockMain;
