import "./navbar.scss";
import {
  changeCurrency,
  getCurrencies,
} from "../../storeModifyingFunctions/data";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../../images/dollar.png";
import { useHistory } from "react-router";
import ToggleMode from "./toggleMode/ToggleMode";
import ColumnsSelect from "../table/components/columnsSelect/ColumnsSelect";

const Navbar = () => {
  const history = useHistory();
  const { currencies, currency } = useSelector((state) => state);
  useEffect(() => {
    getCurrencies();
  }, []);

  const handleChangeCurrency = (event) => {
    for (let el of currencies) {
      if (el.name === event.target.value) {
        changeCurrency(el);
        break;
      }
    }
  };

  const handleClickLogo = () => {
    history.push("/");
  };

  return (
    <header className="nav-container">
      <nav className="navbar">
        <div className="nav-logo" onClick={handleClickLogo}>
          <div className="logo-pic">
            <img src={logo} alt="logo"></img>
          </div>
          YOU COIN
        </div>
        <div className="nav-links">
          
          <ToggleMode />
          <span className="nav-link">
            <select
              value={currency.name}
              onChange={(event) => handleChangeCurrency(event)}
            >
              {currencies.map((el) => {
                return <option value={el.name}>{el.name}</option>;
              })}
            </select>
          </span>
          <span className="nav-link">Home</span>
          <span className="nav-link">About</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
