import React from "react";
import { useSelector } from "react-redux";
import { numberFormatter } from "../../../../dataProcessingFunctions";
import FavoriteButton from "../../../favoriteButton/FavoriteButton";
// import Chart from '../../../chart/Chart';
import "./row.scss";
const Row = (props) => {
  const columns = props.columns;
  const { currency } = useSelector((state) => state);

  const {
    rank,
    name,
    price,
    priceChange1h,
    icon,
    marketCap,
    id,
    priceBtc,
    volume,
    priceChange1d,
    priceChange1w,
    availableSupply,
    totalSupply,
  } = props.coin;
  const coin = props.coin;

  return (
    <>
      {columns.map((el) => {
        return (
          <td className={`${el.value} ${coin[el.value] < 0 ? "negative" : ""} ${coin[el.value] > 0}`}>
            {coin[el.value]}
          </td>
        );
      })}
      {/* <td>{rank}</td>
      <td className="name">
        <span className="coin-logo">
          <img src={icon} alt={name}></img>
        </span>
        <span className="coin-title">{name}</span>
      </td>
      <td
        className={` ${priceChange1h < 0 ? "negative" : "positive"}`}
      >{`${priceChange1h}%`}</td>
      <td
        className={priceChange1d < 0 ? "negative" : "positive"}
      >{`${priceChange1d}%`}</td>
      <td
        className={priceChange1w < 0 ? "negative" : "positive"}
      >{`${priceChange1w}%`}</td>
      <td>{`${currency.symbol}${price.toFixed(2)}`}</td>
      <td>{`${currency.symbol}${numberFormatter(marketCap)}`}</td>
      <td>{numberFormatter(volume)}</td>
      <td>{numberFormatter(availableSupply)}</td>
      <td>{numberFormatter(totalSupply)}</td> */}

      <td>
        <FavoriteButton id={id} />{" "}
      </td>
      {/* <td><Chart /></td> */}
    </>
  );
};

export default Row;
