import Navbar from "../navbar/Navbar";
import Table from "../table/Table";
import CoinPage from "../coinPage/CoinPage";
import "./mainPage.scss";
import useSelector from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MockMain from "../mockTable/MockMain";
import ComponentsContainer from "../componentsContainer/ComponentsContainer";

const MainPage = () => {
  return (
    <div>
      {/* <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Table} />
          <Route path="/coins" component={CoinPage} />
        </Switch>
      </Router> */}
      <ComponentsContainer />
    </div>
  );
};

export default MainPage;
