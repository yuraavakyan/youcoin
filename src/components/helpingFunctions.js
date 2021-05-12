export const getColumns = () => {
  const columnsArray = [
    { name: "#", value: "#" },
    { name: "Name", value: "name" },
    { name: "1H Change", value: "priceChange1h" },
    { name: "Price", value: "price" },
    { name: "Market Cap", value: "marketCap" },
  ];
  let columns = localStorage.getItem("columns");
  if (!columns) {
    localStorage.setItem("columns", JSON.stringify(columnsArray));
    columns = localStorage.getItem("columns");
  }
  return JSON.parse(columns);
};

export const IndexOfItem = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].value === item) {
      return i;
    }
  }
  return false;
};

export const addColumn = (columnToAdd) => {
  const columns = getColumns();
  const element = {
    name: columnToAdd,
    value: columnToAdd,
  };
  columns.push(element);
  localStorage.setItem("columns", JSON.stringify(columns));
};

export const removeColumn = (columnToRemove) => {
  const columns = getColumns();
  const index = IndexOfItem(columns, columnToRemove);
  console.log(index);
  columns.splice(index, 1);
  localStorage.setItem("columns", JSON.stringify(columns));
};
