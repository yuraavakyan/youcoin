export const numberFormatter = (number) => {
  if (number > 999 && number <= 999_999) {
    return `${(number / 1000).toFixed(1)}K`;
  } else if (number > 999_999 && number <= 999_999_999) {
    return `${(number / 1e6).toFixed(1)}M`;
  } else if (number > 999_999_999 && number <= 999_999_999_999) {
    return `${(number / 1e9).toFixed(1)}B`;
  } else if (number > 999_999_999_999) {
    return `${(number / 1e12).toFixed(1)}T`;
  }
};

export const dataBuilder = (dataFromAPI, currency) => {
  const finalResult = [];
  for (let el of dataFromAPI) {
    //foreACH
    const finalResult = [];
    finalResult.push([
      {
        id: "rank",
        title: "rank",
        value: function () {
          return el.rank;
        },
      },
      {
        id: "name",
        title: "name",
        value: function () {
          return (
            <div>
              <span>
                <img src={el.icon}></img>
              </span>
              <span>{el.name}</span>
            </div>
          );
        },
      },
      {
        id: "price",
        title: "price",
        value: function () {
          return el.price;
        },
      },
    ]);
  }
  return finalResult;
};
