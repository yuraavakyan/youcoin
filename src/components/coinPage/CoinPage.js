import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { numberFormatter } from "../../dataProcessingFunctions";
import { getCoin } from "../../storeModifyingFunctions/data";
import FavoriteButton from "../favoriteButton/FavoriteButton";
// import Chart from "../chart/Chart";

import "./coinPage.scss";
import { Suspense } from "react";
import Loading from "./Loading";

const CoinPage = () => {
  const Chart = React.lazy(() => import("../chart/Chart"));
  const location = useLocation();
  const [state, setState] = useState({});
  const { currency } = useSelector((state) => state);

  useEffect(() => {
    const coin = getCoin(location.pathname, currency.name);
    coin.then((data) => setState(data));
  }, [location, currency]);

  const {
    name,
    icon,
    price,
    totalSupply,
    availableSupply,
    websiteUrl,
    marketCap,
    volume,
    twitterUrl,
    id,
  } = state;

  return (
    <div className="coin-page">
      <div className="info-part">
        <span className="title-part">
          <div className="title-price">
            <div className="main-title">
              <span className="logo">
                <img src={icon} alt=""></img>
              </span>
              {name}
              <FavoriteButton id={id} />
            </div>
            <div className="main-price">{`${currency.symbol}${price?.toFixed(
              2
            )}`}</div>
          </div>
          <div className="marketcap-volume">
            <div className="market-cap">
              <div className="market-title">Market Cap</div>
              <div className="market-number">{`${
                currency.symbol
              }${numberFormatter(marketCap)}`}</div>
            </div>
            <div className="volume">
              <div className="volume-title">Volume 24H</div>
              <div className="volume-number">{`${
                currency.symbol
              }${numberFormatter(volume)}`}</div>
            </div>
          </div>
          <div className="available-total">
            <div className="available">
              <div className="available-title">Available Supply</div>
              <div className="available-number">{availableSupply}</div>
            </div>
            <div className="total">
              <div className="total-title">Total Supply</div>
              <div className="total-number">{totalSupply}</div>
            </div>
          </div>
        </span>
        <span className="line"></span>
        <span className="social-part">
          <div className="website">
            <div className="website-title">Website</div>
            <div className="website-block">{websiteUrl}</div>
          </div>
          <div className="community">
            <div className="community-title">Community</div>
            <div className="community-block">{twitterUrl}</div>
          </div>
        </span>
      </div>
      <Suspense fallback={<Loading />}>
        <Chart id={id} visible={true} />
      </Suspense>
    </div>
  );
};

export default CoinPage;
